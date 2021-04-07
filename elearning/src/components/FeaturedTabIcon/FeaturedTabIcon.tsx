import React, { FC } from 'react';
import { TabBarIcon } from 'components/TabBarIcon';
import { Home } from 'components/Icon';
import { FeaturedTabIconProps } from './FeaturedTabIcon.interface';

export const FeaturedTabIcon: FC<FeaturedTabIconProps> = ({
  focused,
  ...iconProps
}) => (
  <TabBarIcon
    focused={focused}
    Icon={Home}
    width={32}
    height={32}
    {...iconProps}
  />
);
