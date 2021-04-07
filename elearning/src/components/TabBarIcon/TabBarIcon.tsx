import React, { FC } from 'react';
import { TabBarIcon as TabBarIconComponent } from './TabBarIcon.styles';
import { TabBarIconProps } from './TabBarIcon.interface';

export const TabBarIcon: FC<TabBarIconProps> = ({
  focused,
  Icon,
  ...iconProps
}) => (
  <TabBarIconComponent focused={focused}>
    <Icon {...iconProps} />
  </TabBarIconComponent>
);
