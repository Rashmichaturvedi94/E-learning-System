import React, { FC, useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SearchScreen as SearchScreenComponent } from './SearchScreen.styles';
import { SearchScreenProps } from './SearchScreen.interface';

export const SearchScreen = () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  });
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
