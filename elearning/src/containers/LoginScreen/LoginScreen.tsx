import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  LoginButton,
  ButtonContainer,
  TitleText,
  InputText,
  SignInLink,
  SignInText
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
      <SignInText>Don't have account? <SignInLink onPress={() => {
        navigation.navigate('CreateAccount');
      }}>Create Accoount</SignInLink></SignInText>

    </View>
  );
};
