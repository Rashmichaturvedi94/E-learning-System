import React, { useState, useEffect } from 'react';
import { View, Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Logo } from 'components/Icon';
import { User } from 'models';
import { setUserDefault } from 'utils/utils';
import {
  LoginButton,
  ButtonContainer,
  TitleText,
  InputText,
  ForgetpasswordLink,
  CreateText,
  CreateLink,
  CreateAccountContainer,
  LogoImage,
  WelcomeText,
} from './LoginScreen.styles';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const fetchUser = async (usr: User) => {
    const userDocument = await firestore()
      .collection('Users')
      .doc(usr.uid)
      .get();
    const userRes: User = {
      uid: usr.uid,
      email: usr.email,
      name: userDocument.data()?.name,
      Occupation: userDocument.data()?.occupation,
      language: userDocument.data()?.language,
    };
    setUserDefault(userRes);
  };
  // Handle user state changes
  function onAuthStateChanged(usr: any) {
    if (initializing) setInitializing(false);
    try {
      if (usr) {
        const user: User = { uid: usr.uid, email: usr.email };
        fetchUser(user);
        setUserDefault(user);
        navigation.navigate('Tabs');
      }
    } catch (e) {
      // saving error
    }
  }
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    let subscriber: () => void;
    const unsubscribe = navigation.addListener('focus', () => {
      subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    });
    const unsubscribe1 = navigation.addListener('blur', () => {
      subscriber();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return () => {
      unsubscribe();
      unsubscribe1();
      subscriber(); // unsubscribe on unmount
    };
  }, [navigation]);

  if (initializing) return null;

  const handleLogin = () => {
    setEmail(email.trim());
    if (email === undefined || email === '') {
      Alert.alert('Email is required to login');
      return;
    }
    if (password === undefined || password === '') {
      Alert.alert('Password is required to login');
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Tabs');
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
    <View>
      <LogoImage source={Logo} />
      <TitleText>Login</TitleText>
      <WelcomeText>Welcome Back</WelcomeText>
      <InputText
        placeholder="email"
        onChangeText={(text) => setEmail(text)}
        value={email.toLowerCase()}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCompleteType="email"
      />
      <InputText
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <ForgetpasswordLink
        onPress={() => {
          navigation.navigate('FP');
        }}
      >
        Forgot password?
      </ForgetpasswordLink>
      <ButtonContainer onPress={handleLogin}>
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
      <CreateAccountContainer>
        <CreateText>Don&apos;t have an account?</CreateText>
        <CreateLink
          onPress={() => {
            navigation.navigate('CreateAccount');
          }}
        >
          Create Account
        </CreateLink>
      </CreateAccountContainer>
    </View>
  );
};
