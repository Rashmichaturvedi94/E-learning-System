import React, { useEffect, useRef } from 'react';
import { View, StatusBar } from 'react-native';
import PagerView from 'react-native-pager-view';
import {
  TitleText,
  styles,
  FavButtonContainer,
  FavoriteButton,
  PageText,
} from './MyCoursesScreen.styles';

export const MyCoursesScreen = () => {
  const pagerViewRef = useRef<PagerView>(null);
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  });
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <TitleText>My Course</TitleText>
      </View>
      <View style={{ flex: 4, backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row' }}>
          <FavButtonContainer
            onPress={() => {
              pagerViewRef?.current?.setPage(0);
            }}
          >
            <FavoriteButton>All</FavoriteButton>
          </FavButtonContainer>
          <FavButtonContainer
            onPress={() => {
              pagerViewRef?.current?.setPage(1);
            }}
          >
            <FavoriteButton>Studying</FavoriteButton>
          </FavButtonContainer>
          <FavButtonContainer
            onPress={() => {
              pagerViewRef?.current?.setPage(2);
            }}
          >
            <FavoriteButton>Subscribed</FavoriteButton>
          </FavButtonContainer>
        </View>
        <PagerView style={styles.pagerView} initialPage={0} ref={pagerViewRef}>
          <View>
            <PageText>List ALL page</PageText>
          </View>
          <View key="1">
            <PageText>List Currently Studying</PageText>
          </View>
          <View key="2">
            <PageText>List Subscribed Page</PageText>
          </View>
        </PagerView>
      </View>
    </View>
  );
};
