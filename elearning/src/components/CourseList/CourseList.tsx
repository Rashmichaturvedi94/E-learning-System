import React, { FC } from 'react';
import { CourseList as CourseListComponent } from './CourseList.styles';
import { CourseListProps } from './CourseList.interface';

export const CourseList: FC<CourseListProps> = ({ children }) => (
  <CourseListComponent>{children}</CourseListComponent>
);
