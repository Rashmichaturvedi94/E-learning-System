import Svg, { SvgProps } from 'react-native-svg';

export interface TabBarIconProps extends SvgProps {
  focused?: boolean;
  Icon: Svg;
}
