import React, { FC, useRef, useEffect, useState } from 'react';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { Icon } from 'react-native-elements';
import { VideoPlayerProps } from './VideoPlayer.interface';
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
} from './VideoPlayer.styles';

export const VideoPlayer: FC<VideoPlayerProps> = () => {
  const progressBarWidth = useRef(Dimensions.get('window').width * 0.8);
  const leftPosition = useRef(new Animated.Value(0)).current;
  const [paused, setPause] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const player = useRef<Video | null>(null);
  const navigation = useNavigation();
  const [overlayHidden, setOverlayHidden] = useState(false);
  const handleOnLoad = (meta: { duration: React.SetStateAction<number> }) => {
    setDuration(meta.duration);
  };
  const handleOverlayPress = () => {
    setOverlayHidden((hidden) => !hidden);
  };
  const handleOnProgress = (progress1: { currentTime: number }) => {
    setCurrentTime(progress1.currentTime);
    setProgress(progress1.currentTime / duration);
    leftPosition.setValue(progress1.currentTime / duration);
  };
  const handleOnEnd = () => {
    setPause(true);
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
  const handleOnProgressPress = (e: { nativeEvent: { pageX: any } }) => {
    const position = e.nativeEvent.pageX - e.nativeEvent.pageX * 0.2;
    console.log(position);
    const seekTo = (position / progressBarWidth.current) * duration;
    player.current?.seek(seekTo);
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
  return (
    <Container>
      <TouchableWithoutFeedback onPress={handleOverlayPress}>
        <View>
          <Video
            source={{
              uri:
                'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
            }}
            style={styles.backgroundVideo}
            ref={player}
            paused={paused}
            resizeMode="contain"
            onLoad={handleOnLoad}
            onProgress={handleOnProgress}
            onEnd={handleOnEnd}
          />
          <ControlsContainer hidden={overlayHidden}>
            <TopContainer>
              <OptionsContainer>
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <CloseIcon />
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
            <ProgressContainer>
              <TouchableWithoutFeedback
                onPress={(e) => handleOnProgressPress(e)}
              >
                <View style={{ width: progressBarWidth.current }}>
                  <SeekBar
                    progress={progress}
                    width={progressBarWidth.current}
                  />
                </View>
              </TouchableWithoutFeedback>
              <Duration>789</Duration>
            </ProgressContainer>
          </ControlsContainer>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
