import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Alert } from 'react-native';
import { Container, Input, TitleText, SaveButton, SaveText } from './PersonelInfoScreen.styles';
import { PersonelInfoScreenProps } from './PersonelInfoScreen.interface';

export const PersonelInfoScreen: FC<PersonelInfoScreenProps> = () => {
  const navigation = useNavigation();
  return (
   
    <Container>
   <View>
      <TitleText>Personel info</TitleText>
      <Input
        placeholder="Full Name" 
      />    
      <Input
        placeholder="Occocupation" 
      />
     <Input
      placeholder="Language" 
    />
      <SaveButton onPress={() => Alert.alert('Simple Button pressed')}>
        <SaveText>SAVE</SaveText> 
      </SaveButton> 
    </View>
    </Container>
  );
};
