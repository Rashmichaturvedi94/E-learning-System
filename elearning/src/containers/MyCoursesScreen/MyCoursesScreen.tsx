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
  ListItemView,
  ListTextContainer,
  ListImage,
  ListTitle,
  TouchPlay,
} from './MyCoursesScreen.styles';
import firestore from '@react-native-firebase/firestore';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export const MyCoursesScreen = () => {
  const navigation = useNavigation();
  //const [dbData, setDbData] = useState();
  const [subscribedCourses, setSubscribedCourses] = useState();

  const pagerViewRef = useRef<PagerView>(null);
  const getCourses = (arr) => {
    if (!arr || arr.length == 0) {
      setSubscribedCourses([]);
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
        setSubscribedCourses(arr2);
      });
  };
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    //Subscription
    firestore()
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
          <View key="1" style={{ flex: 1, height: 500 }}>
            <PageText>List ALL page</PageText>
          </View>
          <View key="2">
            <PageText>List Currently Studying</PageText>
          </View>
          <View key="3">
            <FlatList
              data={subscribedCourses}
              renderItem={({ item }) => (
                <ListItemView>
                  <ListImage source={{ uri: item.image_url }}></ListImage>
                  <ListTextContainer>
                    <ListTitle>{item.title}</ListTitle>
                    <Text>{item.desc}</Text>
                  </ListTextContainer>
                  <TouchPlay
                    onPress={() => {
                      navigation.navigate('CourseDetails');
                    }}
                  >
                    <Icon name="info"></Icon>
                  </TouchPlay>
                </ListItemView>
              )}
              keyExtractor={(item) => item.title.toString()}
            />
          </View>
        </PagerView>
      </View>
    </View>
  );
};
