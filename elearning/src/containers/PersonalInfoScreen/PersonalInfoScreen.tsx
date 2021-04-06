import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Alert } from 'react-native';
import { Container, Input, TitleText, SaveButton, SaveText } from './PersonalInfoScreen.styles';
import { PersonalInfoScreenProps } from './PersonalInfoScreen.interface';

export const PersonalInfoScreen: FC<PersonalInfoScreenProps> = () => {
  const navigation = useNavigation();
  return (

    <Container>
      <View>
        <TitleText>Personal Info</TitleText>
        <Input placeholder="Full Name"/>
        <Input placeholder="Occupation"/>
        <Input placeholder="Application Language"/>
        <SaveButton onPress={() => Alert.alert('Simple Button pressed')}>
          <SaveText>SAVE</SaveText>
        </SaveButton>
      </View>
    </Container>
  );
};
