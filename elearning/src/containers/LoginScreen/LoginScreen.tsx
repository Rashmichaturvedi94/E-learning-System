import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  LoginButton,
  ButtonContainer,
  TitleText,
  InputText,
  SignInLink,
  SignInText,
} from './LoginScreen.styles';
import { Container } from 'containers/CreateAccountScreen/CreateAccountScreen.styles';

export const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <View>
        <TitleText>Login</TitleText>
        <InputText placeholder="Email" />
        <InputText
          placeholder="Password"
          maxLength={16}
          secureTextEntry={true}
        />
        <ButtonContainer
          onPress={() => {
            navigation.navigate('Tabs');
          }}
        >
          <LoginButton>Login</LoginButton>
        </ButtonContainer>
        <SignInLink
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
        >
          Forgot Password?
        </SignInLink>
        <SignInText>
          Don't have account?{' '}
          <SignInLink
            onPress={() => {
              navigation.navigate('CreateAccount');
            }}
          >
            Create Account
          </SignInLink>
        </SignInText>
      </View>
    </Container>
  );
};
