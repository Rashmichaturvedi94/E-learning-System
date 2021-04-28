import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import { User } from 'models/model.interface';
import {
  Container,
  Input,
  TitleText,
  SaveButton,
  SaveText,
  SignInText,
  SignInLink,
  AggrementCheckbox,
  SignInContainer,
  TermsContainer,
  TermsText,
} from './CreateAccountScreen.styles';

export const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const handleTermsPress = () => {
    // open terms
  };
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  });
  const storeData = async (value: User) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@user', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const addUserDeatils = (usr: User) => {
    const user: User = usr;
    user.name = name;
    console.log(user);
    const newReference = database().ref('/users').push();
    user.ref = newReference.key?.toString();
    storeData(user);
    newReference
      .set({
        name,
        email,
        uid: usr.uid,
      })
      .then((response) => {
        console.log(response);
        navigation.navigate('PersonalInfo');
      });
  };

  const handleSignUp = () => {
    setName(name.trim());
    if (name === undefined || name === '') {
      Alert.alert('Name is required to register');
      return;
    }
    setEmail(email.trim());
    if (email === undefined || email === '') {
      Alert.alert('Email is required to register');
      return;
    }
    if (password === undefined || password === '') {
      Alert.alert('Password is required to register');
      return;
    }
    if (!isTermsAccepted) {
      Alert.alert('Please accept terms and conditions.');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((usr: any) => {
        console.log(usr);
        addUserDeatils(usr.user);
      })
      .catch((error: any) => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else if (error.code === 'auth/wrong-password') {
          Alert.alert('The password is Wrong!');
        } else if (error.code === 'auth/user-not-found') {
          Alert.alert('There is no user registered with this email address!');
        } else if (error.code === 'auth/email-already-in-user') {
          Alert.alert(
            'The email address is already in use by another account!',
          );
        } else {
          Alert.alert(error.message);
        }
      });
  };

  return (
    <Container>
      <View>
        <TitleText>Create Acount</TitleText>
        <Input
          placeholder="Name"
          maxLength={20}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          maxLength={20}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCompleteType="email"
        />
        <Input
          placeholder="password"
          maxLength={20}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TermsContainer>
          <AggrementCheckbox
            title="I agree to"
            checkedIcon="check-square"
            uncheckedIcon="square"
            checked={isTermsAccepted}
            onPress={() => setIsTermsAccepted((state) => !state)}
          />
          <TouchableOpacity onPress={handleTermsPress}>
            <TermsText>terms and conditions</TermsText>
          </TouchableOpacity>
        </TermsContainer>
        <SaveButton onPress={handleSignUp}>
          <SaveText>Create Account</SaveText>
        </SaveButton>
        <SignInContainer>
          <SignInText>Already have account?</SignInText>
          <SignInLink
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            Sign In
          </SignInLink>
        </SignInContainer>
      </View>
    </Container>
  );
};
