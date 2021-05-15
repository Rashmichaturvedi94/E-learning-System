import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from 'models';
import { intervalToDuration } from 'date-fns';
import { Storage } from './utils.interface';

enum StorageKeys {
  USER = '@user',
}

export enum CollectionKeys {
  USER = 'user',
  COURSE = 'course',
}

export const getStorage: () => Storage<string> = () => ({
  setItem: (key, value) =>
    AsyncStorage.setItem(key, value).catch((error) => ({ error })),
  getItem: (key: string) =>
    AsyncStorage.getItem(key).catch((error) => ({ error })),
  removeItem: (key: string) =>
    AsyncStorage.removeItem(key).catch((error) => ({ error })),
});

export const setUserDefault = (user?: User) => {
  const jsonValue = JSON.stringify(user);
  if (jsonValue) {
    getStorage().setItem(StorageKeys.USER, jsonValue);
  }
};

export const getUser = async () => {
  const user = getStorage()
    .getItem(StorageKeys.USER)
    .then((json) => {
      return json != null ? JSON.parse(json) : {};
    });
  return user;
};

export const removeUser = () => getStorage().removeItem(StorageKeys.USER);

export const secondsToDuration = (time: number) => {
  const durationObj = intervalToDuration({ start: 0, end: time * 1000 });
  if (durationObj.hours && durationObj.hours > 0) {
    return (
      `${durationObj.hours?.toString().padStart(2, '0')}:` +
      `${durationObj.minutes?.toString().padStart(2, '0')}:` +
      `${durationObj.seconds?.toString().padStart(2, '0')}`
    );
  }
  return `${durationObj.minutes
    ?.toString()
    .padStart(2, '0')}:${durationObj.seconds?.toString().padStart(2, '0')}`;
};
