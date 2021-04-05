import styled from 'styled-components/native';
import { StyleSheet, SafeAreaView, TextInput, Text, TouchableHighlight } from 'react-native';
import { CreateAccountScreenProps } from './CreateAccountScreen.interface';


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

export const SignInText = styled(Text)`
  text-align: center;
  font-size: 14px;
  margin-top: 100px;
`;

export const AggrementText = styled(Text)`
  font-size: 14px;
  margin-top: 30px;
`;

export const SignInLink= styled(Text)`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #0717f7;
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
  color: #FFFFFF;
`;
