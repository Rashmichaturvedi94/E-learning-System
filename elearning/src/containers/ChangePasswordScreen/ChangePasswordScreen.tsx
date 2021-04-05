import React, { FC } from 'react';
import { Container, Input, TitleText, ContinueButton, SaveText, InfoText  } from './ChangePasswordScreen.styles';
import { ChangePasswordScreenProps } from './ChangePasswordScreen.interface';
import { useNavigation } from '@react-navigation/native';
import { View, Alert } from 'react-native';

export const ChangePasswordScreen: FC<ChangePasswordScreenProps>  = () => {
  const navigation = useNavigation();
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
