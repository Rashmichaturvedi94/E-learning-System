import React, { FC, useRef, useEffect, useState } from 'react';
import Video from 'react-native-video';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Animated,
  Dimensions,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { Icon } from 'react-native-elements';
import { CollectionKeys, getUser, secondsToDuration } from 'utils/utils';
import firestore from '@react-native-firebase/firestore';
import { useActionSheet } from '@expo/react-native-action-sheet';
import ISO6391 from 'iso-639-1';
import {
  TapGestureHandler,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {
  VideoPlayerProps,
  TextTrack,
  SelectedTextTrack,
} from './VideoPlayer.interface';
import {
  Container,
  ControlsContainer,
  Duration,
  OptionsContainer,
  PlayButton,
  PlayOptionContainer,
  ProgressContainer,
  SeekBar,
  CloseIcon,
  TopContainer,
  CCIcon,
  styles,
  CurrentProgress,
  ProgressKnob,
  CurrentTime,
} from './VideoPlayer.styles';

export const VideoPlayer: FC<VideoPlayerProps> = () => {
  const progressBarWidth = Dimensions.get('window').width * 0.8;
  const { params } = useRoute();
  const { score } = params;
  const xPosition = useRef(new Animated.Value(0)).current;
  const [paused, setPause] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [textTracks, setTextTracks] = useState<TextTrack[]>([]);
  const [selectedCC, setSelectedCC] = useState<SelectedTextTrack>();
  const player = useRef<Video | null>(null);
  const navigation = useNavigation();
  const [overlayHidden, setOverlayHidden] = useState(false);
  const { showActionSheetWithOptions } = useActionSheet();
  const handleOnLoad = (meta: { duration: React.SetStateAction<number> }) => {
    setDuration(meta.duration);
    // @ts-ignore
    if (meta.textTracks instanceof Array) {
      // @ts-ignore
      setTextTracks(meta.textTracks as TextTrack[]);
    }
  };
  const handleOverlayPress = () => {
    setOverlayHidden((hidden) => !hidden);
  };
  const handleOnProgress = (progress1: { currentTime: number }) => {
    setCurrentTime(progress1.currentTime);
    setProgress(progress1.currentTime / duration);
    xPosition.setValue(progress1.currentTime / duration);
  };

  const updateScore = (user: User) => {
    const userRef = firestore().collection(CollectionKeys.USER).doc(user.uid);
    userRef.update({
      score: firestore.FieldValue.increment(Number(score)),
    });
  };

  const handleOnEnd = () => {
    setPause(true);
    getUser().then((user) => {
      updateScore(user);
    });
  };

  const handlePlayButton = () => {
    if (progress >= 1) {
      player.current?.seek(0);
    }
    setPause((pause) => !pause);
  };
  const handleOnReversePress = () => {
    player.current?.seek(currentTime - 10);
  };
  const handleOnForwardPress = () => {
    player.current?.seek(currentTime + 10);
  };
  const handleOnProgressPress = (e: { nativeEvent: { x: number } }) => {
    const position = e.nativeEvent.x;
    const seekTo = (position / progressBarWidth) * duration;
    player.current?.seek(seekTo);
  };
  const handleCCPress = () => {
    const titles = textTracks?.map((item) => {
      if (item.language !== undefined) {
        if (item.language.length < 3) {
          return ISO6391.getName(item.language);
        }
        return item.language;
      }
      return '';
    });
    const options = ['None', ...titles];

    showActionSheetWithOptions(
      {
        options,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          setSelectedCC({ type: 'language', value: '' });
        } else {
          const item = textTracks[buttonIndex - 1];
          setSelectedCC({ type: 'language', value: item.language });
        }
      },
    );
  };
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
    const parent = navigation.dangerouslyGetParent();
    if (parent) {
      parent.setOptions({
        tabBarVisible: false,
      });
    }
    return () => {
      if (parent) {
        parent.setOptions({
          tabBarVisible: true,
        });
        Orientation.lockToPortrait();
      }
    };
  }, [navigation]);
  const interpolatedX = xPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, progressBarWidth],
    easing: Easing.linear,
  });
  return (
    <Container>
      <TouchableWithoutFeedback onPress={handleOverlayPress}>
        <View>
          <Video
            source={{
              uri:
                'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8',
            }}
            style={styles.backgroundVideo}
            ref={player}
            paused={paused}
            resizeMode="contain"
            onLoad={handleOnLoad}
            onProgress={handleOnProgress}
            onEnd={handleOnEnd}
            selectedTextTrack={selectedCC}
          />
          <ControlsContainer hidden={overlayHidden}>
            <TopContainer>
              <OptionsContainer>
                <TouchableOpacity onPress={handleCCPress}>
                  <CloseIcon />
                </TouchableOpacity>
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <CCIcon />
                </TouchableWithoutFeedback>
              </OptionsContainer>
            </TopContainer>
            <PlayOptionContainer>
              <TouchableOpacity onPress={handleOnReversePress}>
                <Icon name="history" size={30} color="#fff" />
              </TouchableOpacity>
              <TouchableWithoutFeedback onPress={handlePlayButton}>
                <PlayButton name={paused ? 'play-arrow' : 'pause'} />
              </TouchableWithoutFeedback>
              <TouchableOpacity onPress={handleOnForwardPress}>
                <Icon name="update" size={30} color="#fff" />
              </TouchableOpacity>
            </PlayOptionContainer>
            {!overlayHidden && (
              <ProgressContainer
                onStartShouldSetResponder={() => true}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                }}
              >
                <PanGestureHandler onHandlerStateChange={handleOnProgressPress}>
                  <TapGestureHandler
                    onHandlerStateChange={handleOnProgressPress}
                  >
                    <View style={{ width: progressBarWidth }}>
                      <SeekBar progress={progress} width={progressBarWidth} />
                      <CurrentProgress
                        style={{
                          transform: [{ translateX: interpolatedX }],
                          width: progressBarWidth,
                        }}
                      >
                        <CurrentTime>
                          {secondsToDuration(currentTime ?? 0)}
                        </CurrentTime>
                        <ProgressKnob />
                      </CurrentProgress>
                    </View>
                  </TapGestureHandler>
                </PanGestureHandler>
                <Duration>{secondsToDuration(duration)}</Duration>
              </ProgressContainer>
            )}
          </ControlsContainer>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};
