import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SectionList, StatusBar } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';
import { CollectionKeys, getUser } from 'utils/utils';
import firestore from '@react-native-firebase/firestore';
import { CourseList } from 'components/CourseList';
import { User } from 'models';
import { Icon } from 'react-native-elements';
import {
  TitleText,
  styles,
  FavButtonContainer,
  FavoriteButton,
  PageText,
  FavnumContainer,
  ScoreText,
  MenuContainer,
} from './FavoriteScreen.styles';

export const FavoriteScreen = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  });
  const fetchCourse = (user: User) => {
    if (user.favList?.length === 0) {
      return;
    }
    firestore()
      .collection('course')
      .where('ref', 'in', user.favList)

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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUser().then((usr) => {
        firestore()
          .collection(CollectionKeys.USER)
          .doc(usr.uid)
          .get()
          .then((snapshot) => {
            fetchCourse(snapshot.data() as User);
          });
      });
    });
    return unsubscribe;
  }, [navigation]);
  const handleCoursePress = (course: any) => {
    navigation.navigate('Subscribe', { course });
  };
  const pagerViewRef = useRef<PagerView>(null);
  return (
    <View style={[styles.container, { flexDirection: 'column' }]}>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <TitleText>Favorite</TitleText>
      </View>
      <View style={{ flex: 4, backgroundColor: 'white' }}>
        <MenuContainer>
          <FavButtonContainer
            selected={currentPage === 0}
            onPress={() => {
              pagerViewRef?.current?.setPage(0);
              setCurrentPage(0);
            }}
          >
            <FavoriteButton>Favorite</FavoriteButton>
          </FavButtonContainer>
          <FavButtonContainer
            selected={currentPage === 1}
            onPress={() => {
              pagerViewRef?.current?.setPage(1);
              setCurrentPage(1);
            }}
          >
            <FavoriteButton>Badges</FavoriteButton>
          </FavButtonContainer>
          <FavButtonContainer
            selected={currentPage === 2}
            onPress={() => {
              pagerViewRef?.current?.setPage(2);
              setCurrentPage(2);
            }}
          >
            <FavoriteButton>Scores</FavoriteButton>
          </FavButtonContainer>
        </MenuContainer>
        <PagerView style={styles.pagerView} initialPage={0} ref={pagerViewRef}>
          <View>
            <SectionList
              sections={courses}
              renderItem={({ section: { data } }) => {
                return (
                  <CourseList
                    data={data[0].courses}
                    onItemPress={(item) => {
                       handleCoursePress(item);
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
            <Icon name="badge" size={60} />
            <PageText>Coming soon!!</PageText>
          </View>
          <View key="2">
            <FavnumContainer>
              <ScoreText>0</ScoreText>
            </FavnumContainer>
          </View>
        </PagerView>
      </View>
    </View>
  );
};
