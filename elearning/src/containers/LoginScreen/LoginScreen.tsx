import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginButton, ButtonContainer, TitleText, InputText, ForgetpasswordLink, CreateText, CreateLink } from './LoginScreen.styles';
import { LoginScreenProps } from './LoginScreen.interface';

export const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TitleText>Login</TitleText>
      <InputText
        placeholder="Email" 
      />    
      <InputText
        placeholder="Password" 
      />
      <ForgetpasswordLink>Forgot password?</ForgetpasswordLink>
      <ButtonContainer onPress={() => {
        navigation.navigate('Tabs');
      }}>
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
      <CreateText>Don't have an account? <CreateLink>Create Account</CreateLink></CreateText>
    </View>
  );
};
