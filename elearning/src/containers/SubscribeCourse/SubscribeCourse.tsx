import React, { FC, useEffect, useState } from 'react';
import { StatusBar, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { EpisodeItem } from 'components/EpisodeItem';
import firestore from '@react-native-firebase/firestore';
import { CollectionKeys, getUser } from 'utils/utils';
import { User } from 'models';
import {
  AboutCourse,
  Author,
  Label,
  InfoScroll,
  BannerContainer,
  BannerImage,
  Description,
  InfoContainer,
  Row,
  Duration,
  BuyButton,
  BuyLabel,
  Separator,
  BackButton,
  FavContainer,
  FavCount,
  FavIcon,
  BackContainer,
  TouchFav,
} from './SubscribeCourse.styles';
import { SubscribeCourseProps } from './SubscribeCourse.interface';

export const SubscribeCourse: FC<SubscribeCourseProps> = () => {
  const navigation = useNavigation();
  const [lessons, setLessons] = useState([]);
  const [user, setUser] = useState<User>();
  const { params } = useRoute();
  const { course } = params;
  const courseId = course.ref.split('/').pop();

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  });
  useEffect(() => {
    getUser().then((usr) => {
      setUser(usr);
    });
    firestore()
      .collection(`${course.ref}/lesson`)
      .get()
      .then((query) => {
        const arr1 = [];
        query.forEach((doc) => {
          arr1.push(doc.data());
        });
        setLessons(arr1);
      });
  }, [course.ref]);

  const handleSubscribeCourse = () => {
    firestore()
      .collection('subscriptions')
      .add({
        course: courseId,
        user: user?.uid,
      })
      .then(() => {
        Alert.alert('Course has been subscribed.');
      });
  };

  const handleOnBuy = () => {
    firestore()
      .collection('subscriptions')
      .where('course', '==', courseId)
      .where('user', '==', user?.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          handleSubscribeCourse();
        } else {
          Alert.alert('Course already subscribed.');
        }
      });
  };

  const handleMarkFav = () => {
    const courseRef = firestore().doc(course.ref);
    courseRef.update({
      fav_count: firestore.FieldValue.increment(1),
    });
    const usrRef = firestore().collection(CollectionKeys.USER).doc(user?.uid);
    usrRef.update({
      favList: firestore.FieldValue.arrayUnion(course.ref),
    });
  };
  return (
    <SafeAreaView>
      <BannerContainer>
        <BannerImage
          source={{
            uri: course.image_url,
          }}
        />
        <BackContainer>
          <TouchableOpacity
            accessible
            testID="GoBack"
            onPress={() => navigation.goBack()}
          >
            <BackButton />
          </TouchableOpacity>
        </BackContainer>
        <FavContainer>
          <TouchFav
            onPress={() => {
              handleMarkFav();
            }}
          >
            <FavCount>{course.fav_count}</FavCount>
            <FavIcon name="favorite" size={24} />
          </TouchFav>
        </FavContainer>
      </BannerContainer>
      <InfoScroll>
        <InfoContainer>
          <AboutCourse testID="AboutCourse">About the Course</AboutCourse>
          <Description>{course.desc}</Description>
          <Row>
            <Label>Author:</Label>
            <Author>{course.author}</Author>
          </Row>
          <Row>
            <Label>Duration:</Label>
            <Duration>{`${course.duration} hours`}</Duration>
          </Row>
          <BuyButton testID="Subscribe" onPress={handleOnBuy}>
            <BuyLabel>{`Get for $${course.price} only`}</BuyLabel>
          </BuyButton>
          <Separator />
        </InfoContainer>
        {lessons.map((item, i) => (
          <EpisodeItem item={item} key={i.toString()} />
        ))}
      </InfoScroll>
    </SafeAreaView>
  );
};
