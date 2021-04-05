import React, { FC } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginButton, ButtonContainer, input,textStyles } from './LoginScreen.styles';
import { LoginScreenProps } from './LoginScreen.interface';

export const LoginScreen: FC<LoginScreenProps> = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email" 
      />    
      <TextInput
      style={styles.input}
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

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

