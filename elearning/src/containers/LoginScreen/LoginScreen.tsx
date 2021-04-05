import React, { FC } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginButton, ButtonContainer, TitleText, InputText } from './LoginScreen.styles';
import { LoginScreenProps } from './LoginScreen.interface';

export const LoginScreen: FC<LoginScreenProps> = () => {
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
      <ButtonContainer onPress={() => {
        navigation.navigate('Tabs');
      }}>
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
    </View>
  );
};
