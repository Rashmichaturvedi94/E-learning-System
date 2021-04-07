import React, { FC } from 'react';
import { ProfileScreen as ProfileScreenComponent } from './ProfileScreen.styles';
import { ProfileScreenProps } from './ProfileScreen.interface';

export const ProfileScreen: FC<ProfileScreenProps> = ({ children }) => (
  <ProfileScreenComponent>{children}</ProfileScreenComponent>
);
