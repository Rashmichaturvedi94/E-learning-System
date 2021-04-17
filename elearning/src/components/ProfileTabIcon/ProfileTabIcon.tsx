import React, { FC } from 'react';
import { TabBarIcon } from 'components/TabBarIcon';
import { ProfileIcon } from 'components/Icon';
import { ProfileTabIconProps } from './ProfileTabIcon.interface';

export const ProfileTabIcon: FC<ProfileTabIconProps> = ({
  focused,
  ...iconProps
}) => (
  <TabBarIcon
    focused={focused}
    Icon={ProfileIcon}
    width={32}
    height={32}
    {...iconProps}
  />
);
