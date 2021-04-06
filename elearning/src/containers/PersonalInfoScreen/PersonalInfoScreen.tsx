import React from 'react';
import { View, Alert } from 'react-native';
import {
  Container,
  Input,
  TitleText,
  SaveButton,
  SaveText,
} from './PersonalInfoScreen.styles';

export const PersonalInfoScreen = () => {
  return (
    <Container>
      <View>
        <TitleText>Personal Info</TitleText>
        <Input placeholder="Full Name" />
        <Input placeholder="Occupation" />
        <Input placeholder="Application Language" />
        <SaveButton onPress={() => Alert.alert('Simple Button pressed')}>
          <SaveText>SAVE</SaveText>
        </SaveButton>
      </View>
    </Container>
  );
};
