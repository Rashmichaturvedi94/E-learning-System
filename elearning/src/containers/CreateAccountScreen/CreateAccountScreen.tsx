import React, { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const handleTermsPress = () => {
    // open terms
  };

  const handleSignUp = () => {
    setEmail(email.trim());
    if (email === undefined || email === '') {
      Alert.alert('Email is required to login');
      return;
    }
    if (password === undefined || password === '') {
      Alert.alert('Password is required to login');
      return;
    }
    if (!isTermsAccepted) {
      Alert.alert('Please accept terms and conditions.');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('PersonalInfo');
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else if (error.code === 'auth/wrong-password') {
          Alert.alert('The password is Wrong!');
        } else if (error.code === 'auth/user-not-found') {
          Alert.alert('There is no user registered with this email address!');
        } else {
          Alert.alert(error.message);
        }
      });
  };

  return (
    <Container>
      <View>
        <TitleText>Create Acount</TitleText>
        <Input placeholder="Name" maxLength={20} />
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
