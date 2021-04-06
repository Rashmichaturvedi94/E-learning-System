import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  LoginButton,
  ButtonContainer,
  TitleText,
  InputText,
} from './LoginScreen.styles';

export const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TitleText>Login</TitleText>
      <InputText placeholder="Email" />
      <InputText placeholder="Password" />
      <ButtonContainer
        onPress={() => {
          navigation.navigate('Tabs');
        }}
      >
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
    </View>
  );
};
