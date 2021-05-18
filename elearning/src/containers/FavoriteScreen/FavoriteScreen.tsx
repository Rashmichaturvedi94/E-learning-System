import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SectionList, StatusBar } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { CollectionKeys, getUser, setUserDefault } from 'utils/utils';
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
  EmptyText,
} from './FavoriteScreen.styles';

export const FavoriteScreen = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [user, setUser] = useState<User | undefined>();
  const navigation = useNavigation();
  useFocusEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    getUser().then(async (usr) => {
      if (usr != null) {
        const userDocument = await firestore()
          .collection(CollectionKeys.USER)
          .doc(usr.uid)
          .get();
        const userRes: User = {
          uid: usr.uid,
          email: usr.email,
          name: userDocument.data()?.name,
          Occupation: userDocument.data()?.occupation,
          language: userDocument.data()?.language,
          favList: userDocument.data()?.favList,
          score: userDocument.data()?.score,
        };
        setUser(userRes);
        setUserDefault(userRes);
      }
    });
  });
  const fetchCourse = (user: User) => {
    if (user.favList === undefined || user.favList?.length === 0) {
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
            {!!courses && courses.length === 0 && (
              <EmptyText>No Favorite Courses</EmptyText>
            )}
            {!!courses && courses.length > 0 && (
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
            )}
          </View>
          <View key="1">
            <Icon name="badge" size={60} />
            <PageText>Coming soon!!</PageText>
          </View>
          <View key="2">
            <FavnumContainer>
              <ScoreText>{user?.score ?? 0}</ScoreText>
            </FavnumContainer>
          </View>
        </PagerView>
      </View>
    </View>
  );
};
