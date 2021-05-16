import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {
  Container,
  Input,
  TitleText,
  ContinueButton,
  SaveText,
  InfoText,
} from './ForgotPasswordScreen.styles';

export const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const handleResetPassword = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Email sent', '');
      })
      .catch((error) => {
        Alert.alert(error.message.split(']').pop());
      });
  };

  return (
    <Container>
      <View>
        <TitleText>Forgot Password?</TitleText>
        <InfoText>
          Confirm your email and we will send you instructions.
        </InfoText>
        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email.toLowerCase()}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCompleteType="email"
        />
        <ContinueButton onPress={handleResetPassword}>
          <SaveText>Submit</SaveText>
        </ContinueButton>
      </View>
    </Container>
  );
};
