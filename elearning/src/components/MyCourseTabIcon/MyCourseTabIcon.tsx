import React, { FC } from 'react';
import { TabBarIcon } from 'components/TabBarIcon';
import { PlayIcon } from 'components/Icon';
import { MyCourseTabIconProps } from './MyCourseTabIcon.interface';

export const MyCourseTabIcon: FC<MyCourseTabIconProps> = ({
  focused,
  ...iconProps
}) => (
  <TabBarIcon
    focused={focused}
    Icon={PlayIcon}
    width={32}
    height={32}
    {...iconProps}
  />
);
