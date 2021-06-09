import { NativeModules as RNNativeModules } from 'react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// As of react-native@0.64.X file has moved
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const mockedFirebaseAuthSignInWithEmail = jest.fn()
jest.mock('@react-native-firebase/auth', () => () => {
  return {
    signInWithEmailAndPassword: mockedFirebaseAuthSignInWithEmail,
    onAuthStateChanged: () => jest.fn
  }
})

const mockedFirebaseFireStore = jest.fn(() => {})
jest.mock('@react-native-firebase/firestore', () => () => {
  return {
    collection: mockedFirebaseFireStore
  }
})

jest.mock('@react-native-firebase/firestore', () => () => {
  return {
    collection: jest.fn(() => ({ get: jest.fn(), orderBy: jest.fn() })),
  };
});

jest.mock('@react-native-firebase/firestore', () => ({
  isAndroid: jest.fn(() => true),
  isBoolean: jest.fn(() => false),
}));

jest.mock('react-native-video', () => 'Video');

jest.mock('react-native-orientation-locker', () => ({
  lockToPortrait: () => jest.fn,
  lockToLandscapeLeft: () => jest.fn,
}));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
