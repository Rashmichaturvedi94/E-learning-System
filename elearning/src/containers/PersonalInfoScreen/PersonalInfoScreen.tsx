import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { CollectionKeys, getUser, setUserDefault } from 'utils/utils';
import { User } from 'models';
import {
  Container,
  Input,
  TitleText,
  SaveButton,
  SaveText,
  LanguageContainer,
  DropDown,
} from './PersonalInfoScreen.styles';

const data = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Polish',
    value: 'pl',
  },
];

export const PersonalInfoScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [language, setLanguage] = useState('en');

  const handleSavePress = async () => {
    const user: User = await getUser();
    console.log(user);
    firestore()
      .collection(CollectionKeys.USER)
      .doc(user.uid)
      .update({
        name,
        occupation,
        language,
      })
      .then((usr) => {
        console.log('--return==', usr);
        user.Occupation = occupation;
        user.language = language;
        setUserDefault(user);
        navigation.navigate('Tabs');
      });
  };
  return (
    <Container>
      <View>
        <TitleText>Personal Info</TitleText>
        <Input placeholder="Full Name" onChangeText={(text) => setName(text)} />
        <Input
          placeholder="Occupation"
          onChangeText={(text) => setOccupation(text)}
        />
        <LanguageContainer>
          <Text>Language</Text>
          <DropDown
            items={data}
            defaultValue={language}
            onChangeItem={(item) => setLanguage(item.value)}
          />
        </LanguageContainer>
        <SaveButton
          onPress={() => {
            handleSavePress();
          }}
        >
          <SaveText>SAVE</SaveText>
        </SaveButton>
      </View>
    </Container>
  );
};
