import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
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

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Tabs');
      })
      .catch((error) => {

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else if (error.code === 'auth/wrong-password') {
          Alert.alert('The password is Wrong!');
        } else if (error.code === 'auth/user-not-found') {
          Alert.alert('There is no user registered with this email address!');
        } else {
          Alert.alert(error.message);
        }

        console.error(error.message);
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
