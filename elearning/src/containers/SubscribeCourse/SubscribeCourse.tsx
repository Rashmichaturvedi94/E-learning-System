import React, { FC, useEffect, useState } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { EpisodeItem } from 'components/EpisodeItem';
import firestore from '@react-native-firebase/firestore';
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
} from './SubscribeCourse.styles';
import { SubscribeCourseProps } from './SubscribeCourse.interface';

export const SubscribeCourse: FC<SubscribeCourseProps> = () => {
  const [lessons, setLessons] = useState([]);
  const { params } = useRoute();
  const { course } = params;
  console.log('****', course);
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  });
  useEffect(() => {
    firestore()
      .collection(`${course.ref}/lesson`)
      .get()
      .then((query) => {
        const arr1 = [];
        query.forEach((doc) => {
          arr1.push(doc.data());
        });
        setLessons(arr1);
        console.log(arr1);
      });
  }, [course.ref]);
  return (
    <SafeAreaView>
      <BannerContainer>
        <BannerImage
          source={{
            uri:
              'https://miro.medium.com/max/8642/1*iIXOmGDzrtTJmdwbn7cGMw.png',
          }}
        />
        <BackButton />
        <FavContainer>
          <FavCount>24</FavCount>
          <FavIcon name="favorite" size={24} />
        </FavContainer>
      </BannerContainer>
      <InfoScroll>
        <InfoContainer>
          <AboutCourse>About the Course</AboutCourse>
          <Description>
            This course will help you to learn all the basis for the swift
            language. This tutorial has 18 lesson with every littel detail to
            you to learn the basic of swift language
          </Description>
          <Row>
            <Label>Author:</Label>
            <Author>Manpreet</Author>
          </Row>
          <Row>
            <Label>Duration:</Label>
            <Duration>20 mins</Duration>
          </Row>
          <BuyButton>
            <BuyLabel>Get for $9.99 only</BuyLabel>
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
