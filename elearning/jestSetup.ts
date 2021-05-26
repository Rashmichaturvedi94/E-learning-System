import { NativeModules as RNNativeModules } from 'react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const mockedFirebaseAuthSignInWithEmail = jest.fn()
jest.mock('@react-native-firebase/auth', () => () => {
  return {
    signInWithEmailAndPassword: mockedFirebaseAuthSignInWithEmail
  }
})

const mockedFirebaseFireStore = jest.fn()
jest.mock('@react-native-firebase/firestore', () => () => {
  return {
    collection: mockedFirebaseFireStore
  }
})

jest.mock('@react-native-firebase/auth', () => ({
  isAndroid: jest.fn(() => true),
  isBoolean: jest.fn(() => false),
}));

jest.mock('@react-native-firebase/firestore', () => ({
  isAndroid: jest.fn(() => true),
  isBoolean: jest.fn(() => false),
}));

jest.mock('react-native-video', () => 'Video');
jest.mock('react-native-elements');
