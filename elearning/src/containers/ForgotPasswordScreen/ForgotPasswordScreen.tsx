import React, { FC } from 'react';
import { Container, Input, TitleText, ContinueButton, SaveText, InfoText  } from './ForgotPasswordScreen.styles';
import { ForgotPasswordScreenProps } from './ForgotPasswordScreen.interface';
import { useNavigation } from '@react-navigation/native';
import { View, Alert } from 'react-native';

export const ForgotPasswordScreen: FC<ForgotPasswordScreenProps>  = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <View>
        <TitleText>Forgot Password?</TitleText>
        <InfoText>Confirm your email and we will send you instructions.</InfoText>
        <Input placeholder="Email" />
        <ContinueButton onPress={() => Alert.alert('Simple Button pressed')}>
          <SaveText>Continue</SaveText>
        </ContinueButton>
       
      </View>
    </Container>
  );
};
