import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Input,
  TitleText,
  SaveButton,
  SaveText,
  SignInText,
  SignInLink,
  AggrementText,
  SignInContainer,
} from './CreateAccountScreen.styles';

export const CreateAccountScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <View>
        <TitleText>Create Acount</TitleText>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="password" />
        <AggrementText>I agree to terms and conditions</AggrementText>
        <SaveButton
          onPress={() => {
            navigation.navigate('PersonalInfo');
          }}
        >
          <SaveText>Create Account</SaveText>
        </SaveButton>
        <SignInContainer>
          <SignInText>Already have account?</SignInText>
          <SignInLink
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            Sign In
          </SignInLink>
        </SignInContainer>
      </View>
    </Container>
  );
};
