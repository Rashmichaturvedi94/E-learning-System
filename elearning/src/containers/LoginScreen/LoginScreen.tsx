import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  LoginButton,
  ButtonContainer,
  TitleText,
  InputText,
  ForgetpasswordLink,
  CreateText,
  CreateLink,
  SignInLink,
  SignInText,
} from './LoginScreen.styles';

export const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TitleText>Login</TitleText>
      <InputText placeholder="Email" />
      <InputText placeholder="Password" />
      <ForgetpasswordLink>Forgot password?</ForgetpasswordLink>
      <ButtonContainer
        onPress={() => {
          navigation.navigate('Tabs');
        }}
      >
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
      <CreateText>Don't have an account? <CreateLink>Create Account</CreateLink></CreateText>
      <SignInText>
        Don't have account?{' '}
        <SignInLink
          onPress={() => {
            navigation.navigate('CreateAccount');
          }}
        >
          Create Accoount
        </SignInLink>
      </SignInText>
    </View>
  );
};
