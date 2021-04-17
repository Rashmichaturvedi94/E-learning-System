import React, { FC } from 'react';
import { TabBarIcon } from 'components/TabBarIcon';
import { FavIcon } from 'components/Icon';
import { FavTabIconProps } from './FavTabIcon.interface';

export const FavTabIcon: FC<FavTabIconProps> = ({ focused, ...iconProps }) => (
  <TabBarIcon
    focused={focused}
    Icon={FavIcon}
    width={32}
    height={32}
    {...iconProps}
  />
);
