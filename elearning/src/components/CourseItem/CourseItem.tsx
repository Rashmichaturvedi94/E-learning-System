import React, { FC } from 'react';
import { CourseItem as CourseItemComponent } from './CourseItem.styles';
import { CourseItemProps } from './CourseItem.interface';

export const CourseItem: FC<CourseItemProps> = ({ children }) => (
  <CourseItemComponent>{children}</CourseItemComponent>
);
