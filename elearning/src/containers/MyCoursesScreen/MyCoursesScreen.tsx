import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import firestore from '@react-native-firebase/firestore';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { getUser } from 'utils/utils';
import {
  TitleContainer,
  TitleText,
  styles,
  ListItemView,
  ListTextContainer,
  ListImage,
  ListTitle,
} from './MyCoursesScreen.styles';

export const MyCoursesScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState();
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
        setSubscribedCourses(arr2);
      });
  };
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    if (user) {
      // Subscription
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
      <TitleContainer>
        <TitleText>My Course</TitleText>
      </TitleContainer>
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CourseDetails');
              }}
            >
              <ListItemView>
                <ListImage source={{ uri: item.image_url }} />
                <ListTextContainer>
                  <ListTitle>{item.title}</ListTitle>
                  <Text>{item.desc}</Text>
                </ListTextContainer>
              </ListItemView>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title.toString()}
        />
      </View>
    </View>
  );
};
