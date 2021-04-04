import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginButton, ButtonContainer } from './LoginScreen.styles';
import { LoginScreenProps } from './LoginScreen.interface';

export const LoginScreen: FC<LoginScreenProps> = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login</Text>
      <ButtonContainer onPress={() => {
        navigation.navigate('Tabs');
      }}>
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
    </View>
  );
};
