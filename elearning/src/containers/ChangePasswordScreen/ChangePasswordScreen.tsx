import React from 'react';
import { View, Alert } from 'react-native';
import {
  Container,
  Input,
  TitleText,
  ContinueButton,
  SaveText,
} from './ChangePasswordScreen.styles';

export const ChangePasswordScreen = () => {
  return (
    <Container>
      <View>
        <TitleText>Change Password</TitleText>
        <Input placeholder="Old Password" />
        <Input placeholder="New Password" />
        <Input placeholder="Confirm Password" />
        <ContinueButton onPress={() => Alert.alert('Simple Button pressed')}>
          <SaveText>Continue</SaveText>
        </ContinueButton>
      </View>
    </Container>
  );
};
