import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SectionList, StatusBar } from 'react-native';
import PagerView from 'react-native-pager-view';
import { BadgeIcon, PlayIcon } from 'components/Icon';
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

export const FavoriteScreen = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  });
  useEffect(() => {
    firestore()
      .collection('course')
      .get()
      .then((query) => {
        const arr1 = [];
        query.forEach((doc) => {
          arr1.push(doc.data());
        });
        const formatted = [
          {
            //title: 'My List',
            data: [
              {
                courses: arr1,
              },
            ],
          },
          // {
          //   title: 'Mobile',
          //   data: [
          //     {
          //       courses: arr1,
          //     },
          //   ],
          // },
        ];
        setCourses(formatted);
      });
  }, []);

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
