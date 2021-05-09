import React, { useEffect, useRef, useState } from 'react';
import { View, StatusBar, Text, FlatList } from 'react-native';
import PagerView from 'react-native-pager-view';
import firestore from '@react-native-firebase/firestore';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { getUser } from 'utils/utils';
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

export const MyCoursesScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState();
  //const [dbData, setDbData] = useState();
  const [subscribedCourses, setSubscribedCourses] = useState();

  const pagerViewRef = useRef<PagerView>(null);
  getUser().then((usr) => {
    setUser(usr);
  });
  const getCourses = (arr) => {
    if (!arr || arr.length === 0) {
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
        console.log(arr2);
        setSubscribedCourses(arr2);
      });
  };
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    if (user) {
      //Subscription
      firestore()
        .collection('subscriptions')
        .where('user', '==', user?.uid)
        .get()
        .then((query) => {
          var arr1 = [];
          query.forEach((doc) => {
            arr1.push(doc.data().course);
          });
          getCourses(arr1);
        });
    }
  }, [user?.uid]);
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
        {/* 
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
          </View> */}
        <FlatList
          data={subscribedCourses}
          renderItem={({ item }) => (
            <ListItemView>
              <ListImage source={{ uri: item.image_url }} />
              <ListTextContainer>
                <ListTitle>{item.title}</ListTitle>
                <Text>{item.desc}</Text>
              </ListTextContainer>
              <TouchPlay
                onPress={() => {
                  navigation.navigate('CourseDetails');
                }}
              >
                <Icon name="info" />
              </TouchPlay>
            </ListItemView>
          )}
          keyExtractor={(item) => item.title.toString()}
        />
      </View>
    </View>
  );
};
