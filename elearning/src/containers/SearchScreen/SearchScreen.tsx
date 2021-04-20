import React, { FC, useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SearchScreen as SearchScreenComponent, styles, TitleContainer, TitleText } from './SearchScreen.styles';
import { SearchScreenProps } from './SearchScreen.interface';

export const SearchScreen = () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  });
  return (
<View>
<TitleContainer><TitleText>Search</TitleText></TitleContainer>
    </View>
  
  );
};
