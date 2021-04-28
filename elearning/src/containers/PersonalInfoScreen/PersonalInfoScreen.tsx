import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import { Picker } from '@react-native-picker/picker';
import {
  Container,
  Input,
  TitleText,
  SaveButton,
  SaveText,
  LanguageContainer,
  DropDown,
} from './PersonalInfoScreen.styles';

export const PersonalInfoScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [language, setLanguage] = useState('');
  /*
  const getData = async () => {
    try {
      const ref = await AsyncStorage.getItem('@user_ref');
      setUserRef(ref!);
      const nme = await AsyncStorage.getItem('@user_name');
      setUserRef(nme!);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }); */
  const handleSavePress = async () => {
    const user = await AsyncStorage.getItem('@user');
    console.log('user**', user);
    const ref = await AsyncStorage.getItem('@user_ref');
    console.log(`users/${ref}`);
    database()
      .ref(`users/${ref}`)
      .update({
        name,
        occupation,
        language,
      })
      .then(() => navigation.navigate('Tabs'));
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
            selectedValue={language}
            onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Polish" value="pl" />
          </DropDown>
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
