import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, Text, SectionList, StatusBar } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';
import { BadgeIcon, PlayIcon } from 'components/Icon';
import { useFocusEffect } from '@react-navigation/native';
import { getUser } from 'utils/utils';

import {
  TitleText,
  styles,
  FavButtonContainer,
  FavoriteButton,
  PageText,
  FavnumContainer,
  ScoreText,
} from './FavoriteScreen.styles';
import firestore from '@react-native-firebase/firestore';
import { CourseList } from 'components/CourseList';
import { configs } from '@typescript-eslint/eslint-plugin';

export const FavoriteScreen = () => {
  const [courses, setCourses] = useState([]);
  const [userFavCourse, setUserFavCourse] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  });
  const fetchCourse = () => {
    const userFav = ['course/c1', 'course/c2'];
    console.log('******', userFavCourse);
    firestore()
      .collection('course')
      //.where('ref', 'in', ['course/c1'])
      //.where('ref', 'in', userFav)
      //.where('ref', 'in', userFavCourse)
      .get()
      .then((query) => {
        const arr1 = [];
        query.forEach((doc) => {
          arr1.push(doc.data());
        });
        const formatted = [
          {
            data: [
              {
                courses: arr1,
              },
            ],
          },
        ];
        setCourses(formatted);
      });
  };
  const getUsr = () =>
    getUser().then((usr) => {
      setUserFavCourse(usr.favList);
      console.log('usr.favList', usr.favList);

      //setTimeout(fetchCourse,1000);
      console.log('userFavCourse', userFavCourse);
    });
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getUsr();
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  useFocusEffect(() => {
   // getUsr();
  });
  const pagerViewRef = useRef<PagerView>(null);
  return (
    <View style={[styles.container, { flexDirection: 'column' }]}>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <TitleText>Favorite</TitleText>
      </View>
      <View style={{ flex: 4, backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row' }}>
          <FavButtonContainer
            onPress={() => {
              pagerViewRef?.current?.setPage(0);
            }}
          >
            <FavoriteButton>Favorite</FavoriteButton>
          </FavButtonContainer>
          <FavButtonContainer
            onPress={() => {
              pagerViewRef?.current?.setPage(1);
            }}
          >
            <FavoriteButton>Badges</FavoriteButton>
          </FavButtonContainer>
          <FavButtonContainer
            onPress={() => {
              pagerViewRef?.current?.setPage(2);
            }}
          >
            <FavoriteButton>Scores</FavoriteButton>
          </FavButtonContainer>
        </View>
        <PagerView style={styles.pagerView} initialPage={0} ref={pagerViewRef}>
          <View>
            <SectionList
              sections={courses}
              renderItem={({ section: { data } }) => {
                return (
                  <CourseList
                    data={data[0].courses}
                    onItemPress={(item) => {
                      // handleCoursePress(item);
                    }}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
              )}
            />
          </View>
          <View key="1">
            <BadgeIcon />
            <PageText>Coming soon!!</PageText>
          </View>
          <View key="2">
            <FavnumContainer>
              <ScoreText>00</ScoreText>
            </FavnumContainer>
          </View>
        </PagerView>
      </View>
    </View>
  );
};
