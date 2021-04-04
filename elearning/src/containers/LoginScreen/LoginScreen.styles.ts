import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { LoginScreenProps } from './LoginScreen.interface';

export const ButtonContainer = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  background-color: turquoise;
`;
export const LoginButton = styled(Text)`
  height: 44px;
  margin: 16px;
  width: 80%;
  color: white;
  text-align: center;
`;
