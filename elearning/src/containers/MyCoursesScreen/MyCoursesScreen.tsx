import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {
  TitleText,
  styles,
  FavButtonContainer,
  FavoriteButton,
  PageText,
} from './MyCoursesScreen.styles';
import firestore from '@react-native-firebase/firestore';

export const MyCoursesScreen = () => {
  const [dbData, setDbData] = useState();
  const [subscribedCourses, setSubscribedCourses] = useState();

  const Item = ({ title }: { title: string }) => (
    <View style={styless.item}>
      <Text style={styless.title}>{title}</Text>
    </View>
  );

  const pagerViewRef = useRef<PagerView>(null);
  const getCourses = (arr) => {
    if (!arr || arr.length == 0) {
      setDbData([]);
      return;
    }
    firestore()
      .collection('course')
      .where('__name__', 'in', arr)
      .get()
      .then((query) => {
        var arr2 = [];

        query.forEach((doc) => {
          arr2.push(doc.data());
        });
        setDbData(arr2);
      });
  };
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    //Subscription
    const subsRef = firestore()
      .collection('subscriptions')
      .where('user', '==', 'u1')
      .get()
      .then((query) => {
        var arr1 = [];
        query.forEach((doc) => {
          arr1.push(doc.data().course);
        });
        getCourses(arr1);
      });
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
          <View style={{ flex: 1, height: 500 }}>
            <PageText>List ALL page</PageText>

            <FlatList
              data={dbData}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Image
                    source={{ uri: item.image_url }}
                    style={{ width: 40, height: 40 }}
                  />
                  <View
                    style={{
                      alignItems: 'flex-start',
                      flex: 1,
                      marginTop: 15,
                      marginStart: 15,
                    }}
                  >
                    <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                    <Text>{item.desc}</Text>
                  </View>
                </View>
              )}
              //keyExtractor={ item => item.id.toString()}
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
