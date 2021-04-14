import React, { useRef } from 'react';
import {
  TitleText,
  styles,
  FavButtonContainer,
  FavoriteButton,
  PageText,
} from './MyCoursesScreen.styles';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';

export const MyCoursesScreen = () => {
  const pagerViewRef = useRef<PagerView>(null);
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
        <View
          style={[
            styles.container,
            {
              flexDirection: 'row',
            },
          ]}
        ></View>
      </View>
      <View style={{ flex: 4, backgroundColor: 'white' }}>
      <View style={{flexDirection: 'row'}}>
        <FavButtonContainer onPress={() => {
            pagerViewRef?.current?.setPage(0);
          }}>
          <FavoriteButton>All</FavoriteButton>
        </FavButtonContainer >
        <FavButtonContainer onPress={() => {
            pagerViewRef?.current?.setPage(1);
          }}>
          <FavoriteButton>Studying</FavoriteButton>
        </FavButtonContainer>
        <FavButtonContainer onPress={() => {
            pagerViewRef?.current?.setPage(2);
          }}>
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

