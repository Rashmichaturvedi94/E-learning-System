import React, { FC } from 'react';
import {
  CourseImage,
  CourseContainer,
  TitleContainer,
  CourseTitle,
  FavIcon,
  FavContainer,
  FavCount,
} from './CourseItem.styles';
import { CourseItemProps } from './CourseItem.interface';

export const CourseItem: FC<CourseItemProps> = ({ item }) => {
  return (
    <CourseContainer>
      <CourseImage
        source={{
          uri: item.image_url,
        }}
      />
      <FavContainer>
        <FavCount>{item.fav_count}</FavCount>
        <FavIcon name="favorite" size={24} />
      </FavContainer>
      <TitleContainer>
        <CourseTitle>{item.title}</CourseTitle>
      </TitleContainer>
    </CourseContainer>
  );
};
