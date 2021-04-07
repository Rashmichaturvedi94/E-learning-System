import styled from 'styled-components/native';
import { TabBarIconProps } from './TabBarIcon.interface';

export const TabBarIcon = styled.View<Pick<TabBarIconProps, 'focused'>>`
  flex: 1;
  opacity: ${({ focused }) => (focused ? 1 : 0.6)};
  align-items: center;
  justify-content: center;
`;
