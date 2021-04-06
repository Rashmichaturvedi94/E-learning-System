import React from 'react';
import { View, Alert } from 'react-native';
import {
  Container,
  Input,
  TitleText,
  ContinueButton,
  SaveText,
  InfoText,
} from './ForgotPasswordScreen.styles';

export const ForgotPasswordScreen = () => {
  return (
    <Container>
      <View>
        <TitleText>Forgot Password?</TitleText>
        <InfoText>
          Confirm your email and we will send you instructions.
        </InfoText>
        <Input placeholder="Email" />
        <ContinueButton onPress={() => Alert.alert('Simple Button pressed')}>
          <SaveText>Continue</SaveText>
        </ContinueButton>
      </View>
    </Container>
  );
};
