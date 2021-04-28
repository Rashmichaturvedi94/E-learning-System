import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {
  TitleText,
  styles,
  FavButtonContainer,
  FavoriteButton,
  PageText,
} from './MyCoursesScreen.styles';
import database from '@react-native-firebase/database';

export const MyCoursesScreen = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const [dbData, setDbData] = useState();
   database()
    .ref('/course')
    .once('value')
    .then((snapshot) => {
      var items = [];
      snapshot.forEach((child) => {
        items.push(child.val());
        //return true;
      });
      //console.log('item: ', items);
      setDbData(items);
     // console.log('****dbdata', dbData);
    });
 // console.log('****data', dbData);

  const Item = ({ title }: { title: string }) => (
    <View style={styless.item}>
      <Text style={styless.title}>{title}</Text>
    </View>
  );

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
          <View style={{flex: 1,  height: 500}}>
            <PageText>List ALL page</PageText>

            <FlatList
              data={dbData}
              renderItem={({ item }) => (
                <Text style={styless.item}>{item.title}</Text>
              )}
              keyExtractor={ item => item.id.toString()}
            />
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
const styless = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
