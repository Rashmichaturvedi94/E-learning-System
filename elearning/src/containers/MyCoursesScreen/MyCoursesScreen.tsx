import React, { useEffect, useState } from 'react';
import { StatusBar, Text, FlatList, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { getUser } from 'utils/utils';
import {
  Container,
  TitleContainer,
  TitleText,
  ListItemView,
  ListTextContainer,
  ListImage,
  ListTitle,
  ListContainer,
  EmptyText,
} from './MyCoursesScreen.styles';

export const MyCoursesScreen = () => {
  const navigation = useNavigation();
  const [subscribedCourses, setSubscribedCourses] = useState([]);
  const handleMyCoursePress = (course: any) => {
    navigation.navigate('CourseDetails', { course });
  };

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
        const arr2 = [];
        query.forEach((doc) => {
          arr2.push(doc.data());
        });
        setSubscribedCourses(arr2);
      });
  };

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    const unsubscribe = navigation.addListener('focus', () => {
      getUser().then((usr) => {
        firestore()
          .collection('subscriptions')
          .where('user', '==', usr?.uid)
          .get()
          .then((query) => {
            const arr1 = [];
            query.forEach((doc) => {
              arr1.push(doc.data().course);
            });
            getCourses(arr1);
          });
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <TitleContainer>
        <TitleText>My Course</TitleText>
      </TitleContainer>
      {!!subscribedCourses && subscribedCourses.length === 0 && (
        <EmptyText>No Course subscribed</EmptyText>
      )}
      {!!subscribedCourses && subscribedCourses.length > 0 && (
        <ListContainer>
          <FlatList
            key={subscribedCourses?.length}
            data={subscribedCourses}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  handleMyCoursePress(item);
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
            extraData={{ subscribedCourses }}
          />
        </ListContainer>
      )}
    </Container>
  );
};
