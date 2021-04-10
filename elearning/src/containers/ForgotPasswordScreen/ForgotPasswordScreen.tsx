import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Input,
  TitleText,
  ContinueButton,
  SaveText,
  InfoText,
} from './ForgotPasswordScreen.styles';

export const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <View>
        <TitleText>Forgot Password?</TitleText>
        <InfoText>
          Confirm your email and we will send you instructions.
        </InfoText>
        <Input placeholder="Email" />
        <ContinueButton
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <SaveText>Submit</SaveText>
        </ContinueButton>
      </View>
    </Container>
  );
};
