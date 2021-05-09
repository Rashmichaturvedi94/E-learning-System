import React, { FC } from 'react';
import { View, SafeAreaView } from 'react-native';
import { BannerContainer, BannerImage } from './SubscribeCourse.styles';
import { SubscribeCourseProps } from './SubscribeCourse.interface';

export const SubscribeCourse: FC<SubscribeCourseProps> = () => {
  return (
    <SafeAreaView>
      <BannerContainer>
        <BannerImage
          source={{
            uri: 'https://miro.medium.com/max/8642/1*iIXOmGDzrtTJmdwbn7cGMw.png',
          }}
        />
      </BannerContainer>
    </SafeAreaView>
  );
};
