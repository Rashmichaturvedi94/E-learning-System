import React, { useState, useEffect } from 'react';
import { View, Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Logo } from 'components/Icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(usr: any) {
    if (initializing) setInitializing(false);
    try {
      if (usr) {
        AsyncStorage.setItem('@user_email', usr.email!);
        navigation.navigate('Tabs');
      }
    } catch (e) {
      // saving error
    }
  }

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (initializing) return null;

  const handleLogin = () => {
    setEmail(email.trim());
    if (email === undefined || email === '') {
      Alert.alert('Email is required to login');
      return;
    }
    if (password === undefined || password === '') {
      Alert.alert('Password is required to login');
      return;
    }
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
      });
  };
  return (
    <View>
      <LogoImage source={Logo} />
      <TitleText>Login</TitleText>
      <WelcomeText>Welcome Back</WelcomeText>
      <InputText
        placeholder="email"
        onChangeText={(text) => setEmail(text)}
        value={email.toLowerCase()}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCompleteType="email"
      />
      <InputText
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <ForgetpasswordLink
        onPress={() => {
          navigation.navigate('FP');
        }}
      >
        Forgot password?
      </ForgetpasswordLink>
      <ButtonContainer onPress={handleLogin}>
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
      <CreateAccountContainer>
        <CreateText>Don&apos;t have an account?</CreateText>
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
