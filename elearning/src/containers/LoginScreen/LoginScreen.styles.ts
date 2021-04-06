import { Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  margin: 0px 16px;
`;


export const ButtonContainer = styled(TouchableOpacity)`
  height: 50px;
  border-radius: 10px;
  background-color: #1b8ffa;
  margin: 50px 16px;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled(Text)`
  color: #ffffff;
`;

export const TitleText = styled(Text)`
  margin-top: 100px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const InputText = styled(TextInput)`
  height: 40px;
  margin-top: 50px;
  border-bottom-color: #b0adac;
  border-bottom-width: 0.5px;
`;


export const SignInText = styled(Text)`
  text-align: center;
  font-size: 14px;
  margin-top: 100px;
`;


export const SignInLink= styled(Text)`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #0717f7;
`;