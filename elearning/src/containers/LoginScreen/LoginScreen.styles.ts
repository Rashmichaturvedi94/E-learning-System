import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styled from 'styled-components/native';

export const ButtonContainer = styled(TouchableOpacity)`
  height: 50px;
  border-radius: 10px;
  background-color: #1b8ffa;
  margin: 100px 16px;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled(Image)`
  width: 99px;
  height: 98px;
  align-self: center;
  margin-top: 100px;
`;

export const LoginButton = styled(Text)`
  color: #ffffff;
`;

export const TitleText = styled(Text)`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const WelcomeText = styled(Text)`
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  color: #3c3c43;
  opacity: 0.6;
  margin-top: 16px;
`;

export const InputText = styled(TextInput)`
  height: 40px;
  margin: 12px;
  border-bottom-color: #b0adac;
  border-bottom-width: 0.5px;
`;

export const ForgetpasswordLink = styled(Text)`
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  margin-right: 16px;
  margin-top: 10px;
  color: #007aff;
`;

export const CreateAccountContainer = styled(View)`
  flex-direction: row;
  align-self: center;
`;

export const CreateText = styled(Text)`
  text-align: center;
  font-size: 14px;
`;

export const CreateLink = styled(Text)`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #007aff;
  margin-left: 4px;
`;
