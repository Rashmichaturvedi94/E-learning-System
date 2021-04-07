import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Input,
  TitleText,
  SaveButton,
  SaveText,
} from './PersonalInfoScreen.styles';

export const PersonalInfoScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <View>
        <TitleText>Personal Info</TitleText>
        <Input placeholder="Full Name" />
        <Input placeholder="Occupation" />
        <Input placeholder="Application Language" />
        <SaveButton
          onPress={() => {
            navigation.navigate('Tabs');
          }}
        >
          <SaveText>SAVE</SaveText>
        </SaveButton>
      </View>
    </Container>
  );
};
