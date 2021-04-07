import React, { FC } from 'react';
import { MyCoursesScreen as MyCoursesScreenComponent } from './MyCoursesScreen.styles';
import { MyCoursesScreenProps } from './MyCoursesScreen.interface';

export const MyCoursesScreen: FC<MyCoursesScreenProps> = ({ children }) => (
  <MyCoursesScreenComponent>{children}</MyCoursesScreenComponent>
);
