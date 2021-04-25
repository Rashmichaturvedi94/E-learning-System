import styled from 'styled-components/native';
import { CheckBox } from 'react-native-elements';
import {
  SafeAreaView,
  TextInput,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    left: -16,
    top: 16,
    borderWidth: 0,
  },
  termsTitle: {
    fontWeight: '400',
  },
});

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  margin: 0px 16px;
`;

export const TitleText = styled(Text)`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 100px;
`;

export const AggrementCheckbox = styled(CheckBox).attrs({
  checkedColor: '#009aff',
  textStyle: styles.termsTitle,
  containerStyle: styles.containerStyle,
})`
  font-size: 14px;
  margin-top: 30px;
  margin-left: 40px;
`;

export const TermsText = styled(Text)`
  color: #007aff;
  margin-top: 35px;
  text-align: left;
  margin-left: -42px;
`;

export const SignInContainer = styled(View)`
  flex-direction: row;
  align-self: center;
  margin-top: 100px;
`;

export const SignInText = styled(Text)`
  text-align: center;
  font-size: 14px;
`;

export const SignInLink = styled(Text)`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #007aff;
  margin-left: 4px;
`;

export const Input = styled(TextInput)`
  height: 40px;
  margin-top: 20px;
  border-bottom-color: #b0adac;
  border-bottom-width: 0.5px;
  border-color: white;
`;

export const SaveButton = styled(TouchableHighlight)`
  height: 50px;
  border-radius: 10px;
  background-color: #1b8ffa;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const SaveText = styled(Text)`
  color: #ffffff;
`;

export const TermsContainer = styled(View)`
  flex-direction: row;
`;
