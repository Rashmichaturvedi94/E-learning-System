import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  LoginButton,
  ButtonContainer,
  TitleText,
  InputText,
  ForgetpasswordLink,
  CreateText,
  CreateLink,
  CreateAccountContainer,
  LogoImage,
  WelcomeText,
} from './LoginScreen.styles';
import auth from '@react-native-firebase/auth';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const handleLogin = () => {
    auth().signInWithEmailAndPassword(
        email,
        password,
      )
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Tabs');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View>
      <LogoImage source={require('assets/icons/logo.png')} />
      <TitleText>Login</TitleText>
      <WelcomeText>Welcome Back</WelcomeText>
      <InputText placeholder="Email" onChangeText={text => setEmail(text)}/>
      <InputText placeholder="Password" onChangeText={text => setPassword(text)} secureTextEntry={true}/>
      <ForgetpasswordLink
        onPress={() => {
          navigation.navigate('FP');
        }}
      >
        Forgot password?
      </ForgetpasswordLink>
      <ButtonContainer
        onPress={handleLogin}
      >
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
      <CreateAccountContainer>
        <CreateText>Don't have an account?</CreateText>
        <CreateLink
          onPress={() => {
            navigation.navigate('CreateAccount');
          }}
        >
          Create Account
        </CreateLink>
      </CreateAccountContainer>
    </View>
  );
};
