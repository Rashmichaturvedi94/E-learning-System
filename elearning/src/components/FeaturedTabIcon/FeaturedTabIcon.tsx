import React, { FC } from 'react';
import { TabBarIcon } from 'components/TabBarIcon';
import { HomeIcon } from 'components/Icon';
import Svg from 'react-native-svg';
import { FeaturedTabIconProps } from './FeaturedTabIcon.interface';

export const FeaturedTabIcon: FC<FeaturedTabIconProps> = ({
  focused,
  ...iconProps
}) => (
  <TabBarIcon
    focused={focused}
    Icon={(HomeIcon as unknown) as Svg}
    width={32}
    height={32}
    {...iconProps}
  />
);
