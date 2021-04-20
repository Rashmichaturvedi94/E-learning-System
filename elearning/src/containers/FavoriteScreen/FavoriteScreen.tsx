import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import {
  TitleText,
  styles,
  FavButtonContainer,
  FavoriteButton,
  PageText,
} from './FavoriteScreen.styles';

export const FavoriteScreen = () => {
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
        <TitleText>Favorite</TitleText>
      </View>
      <View style={{ flex: 4, backgroundColor: 'white' }}>
         <View style={{flexDirection: 'row'}}>
        <FavButtonContainer onPress={() => {
             pagerViewRef?.current?.setPage(0);
           }}>
           <FavoriteButton>Favorite</FavoriteButton>
         </FavButtonContainer >
         <FavButtonContainer onPress={() => {
             pagerViewRef?.current?.setPage(1);
           }}>
           <FavoriteButton>Badges</FavoriteButton>
         </FavButtonContainer>
         <FavButtonContainer onPress={() => {
             pagerViewRef?.current?.setPage(2);
           }}>
           <FavoriteButton>Scores</FavoriteButton>
         </FavButtonContainer>
       </View>
       <PagerView style={styles.pagerView} initialPage={0} ref={pagerViewRef}>
         <View>
           <PageText>Favorite page</PageText>
       </View>
         <View key="1">
           <PageText>Badge page</PageText>
         </View>
         <View key="2">
           <PageText>Score page</PageText>
         </View>
       </PagerView>
      </View>
    </View>
  );
};
