import styled from 'styled-components/native';
import { StyleSheet, SafeAreaView, TextInput, Text, TouchableHighlight } from 'react-native';
import { ForgotPasswordScreenProps } from './ForgotPasswordScreen.interface';


export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  margin: 0px 16px;
`;

export const TitleText = styled(Text)`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
`;


export const InfoText = styled(Text)`
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
  color: #9a9a9c;
`;

export const Input = styled(TextInput)`
  height: 40px;
  margin-top: 20px;
  border-bottom-color: #b0adac;
  border-bottom-width: 0.5px;
  border-color: white;
`;

export const ContinueButton = styled(TouchableHighlight)`
  height: 50px;
  border-radius: 10px;
  background-color: #1b8ffa;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const SaveText = styled(Text)`
  color: #FFFFFF;
`;
