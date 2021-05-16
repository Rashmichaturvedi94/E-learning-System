import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { User } from 'models';
import { setUserDefault, CollectionKeys } from 'utils/utils';
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

  const addUserDeatils = (usr: User) => {
    const user: User = { uid: usr.uid, email: usr.email, name };
    setUserDefault(user);
    firestore()
      .collection(CollectionKeys.USER)
      .doc(usr.uid)
      .set({
        name,
      })
      .then(() => {
        navigation.navigate('PersonalInfo', { name });
      })
      .catch(() => {
        Alert.alert('An Error Occurred. Please try again');
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
          maxLength={50}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          maxLength={50}
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
