import { Text, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { LoginScreenProps } from './LoginScreen.interface';

export const ButtonContainer = styled(TouchableOpacity)`
  height: 50px;
  border-radius: 10px;
  background-color: #1b8ffa;
  margin: 50px 16px;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled(Text)`
  color: #FFFFFF;
`;

export const TitleText = styled(Text)`
  margin-top: 100px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const InputText = styled(TextInput)`
  height: 40px;
  margin: 12px;
  borderBottomColor: #b0adac;
  borderBottomWidth: 0.5px;
`;
