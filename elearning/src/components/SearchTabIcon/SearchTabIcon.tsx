import React, { FC } from 'react';
import { TabBarIcon } from 'components/TabBarIcon';
import { SearchIcon } from 'components/Icon';
import Svg from 'react-native-svg';
import { SearchTabIcon as SearchTabIconComponent } from './SearchTabIcon.styles';
import { SearchTabIconProps } from './SearchTabIcon.interface';

export const SearchTabIcon: FC<SearchTabIconProps> = ({
  focused,
  ...iconProps
}) => (
  <TabBarIcon
    focused={focused}
    Icon={SearchIcon}
    width={32}
    height={32}
    {...iconProps}
  />
);
