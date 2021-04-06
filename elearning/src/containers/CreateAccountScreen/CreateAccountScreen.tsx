import React from 'react';
import { View, Alert } from 'react-native';
import {
  Container,
  Input,
  TitleText,
  SaveButton,
  SaveText,
  SignInText,
  SignInLink,
  AggrementText,
} from './CreateAccountScreen.styles';

export const CreateAccountScreen = () => {
  return (
    <Container>
      <View>
        <TitleText>Create Acount</TitleText>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="password" />
        <AggrementText>I agree to terms and conditions</AggrementText>
        <SaveButton onPress={() => Alert.alert('Simple Button pressed')}>
          <SaveText>Create Account</SaveText>
        </SaveButton>
        <SignInText>
          Already have account?
          <SignInLink>Sign In</SignInLink>
        </SignInText>
      </View>
    </Container>
  );
};
