import AsyncStorage from '@react-native-async-storage/async-storage';
import { Storage } from './utils.interface';

export const getStorage: () => Storage<string> = () => ({
  setItem: (key, value) =>
    AsyncStorage.setItem(key, value).catch((error) => ({ error })),
  getItem: (key: string) =>
    AsyncStorage.getItem(key).catch((error) => ({ error })),
  removeItem: (key: string) =>
    AsyncStorage.removeItem(key).catch((error) => ({ error })),
});

export const getUser = async () => getStorage().getItem('@user');
