import React, { FC } from 'react';
import {
  CourseImage,
  CourseContainer,
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
          uri: item.imageUrl,
        }}
      />
      <FavContainer>
        <FavCount>{item.favCount}</FavCount>
        <FavIcon name="favorite" size={24} />
      </FavContainer>
      <CourseTitle>{item.title}</CourseTitle>
    </CourseContainer>
  );
};
