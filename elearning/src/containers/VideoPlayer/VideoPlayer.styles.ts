import styled from 'styled-components/native';
import { Animated, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Progress from 'react-native-progress';

export const Container = styled(View)`
  flex: 1;
  top: 0px;
  background-color: #000000;
`;

export const TopContainer = styled(View)`
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  margin: 0px 16px;
  margin-top: 24px;
`;

export const PlayOptionContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PlayButton = styled(Icon).attrs((props) => ({
  name: props.name,
  color: '#ffffff',
  size: 52,
}))`
  margin: 0px 32px;
`;

export const OptionsContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const CloseIcon = styled(Icon).attrs({
  name: 'closed-caption',
  color: '#fff',
})`
  height: 24px;
  width: 24px;
  margin-right: 56px;
`;

export const CCIcon = styled(Icon).attrs({
  name: 'close',
  color: '#fff',
})`
  height: 24px;
  width: 24px;
  margin-right: 56px;
`;

export const TitleContainer = styled(View)`
  flex-direction: row;
  margin-top: 8px;
`;

export const ControlsContainer = styled(View)<{ hidden: boolean }>`
  flex-direction: column;
  bottom: 0px;
  left: 0px;
  right: 0px;
  justify-content: space-between;
  height: 100%;
  z-index: ${({ hidden }) => (hidden ? -1 : 1)};
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
`;

export const ProgressContainer = styled(View)`
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  margin: 0px 48px;
  margin-bottom: 24px;
`;
export const SeekBar = styled(Progress.Bar).attrs({
  color: 'white',
  unfilledColor: 'rgba(255, 255, 255, 0.5)',
})`
  color: #fff;
  border-color: rgba(255, 255, 255, 0);
  height: 3px;
`;

export const Duration = styled(Text)`
  color: #fff;
  opacity: 0.5;
  font-weight: 700;
  font-size: 14px;
  margin-left: 15px;
`;

export const CurrentProgress = styled(Animated.View)`
  flex-direction: column;
  position: absolute;
  bottom: -8px;
`;

export const ProgressKnob = styled(View)`
  background-color: #fff;
  width: 18px;
  height: 18px;
  border-radius: 9px;
`;

export const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
