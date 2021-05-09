import styled from 'styled-components/native';
import { View, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export const CourseContainer = styled(View)`
  border-radius: 5px;
  margin: 0px 4px;
`;

export const CourseImage = styled(Image)`
  width: 200px;
  height: 160px;
  border-radius: 8px;
`;

export const TitleContainer = styled(View)`
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0px;
  width: 100%;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const CourseTitle = styled(Text)`
  color: white;
  font-weight: 600;
  font-size: 17px;
  margin: 6px 8px;
`;

export const FavIcon = styled(Icon).attrs({
  name: 'favorite',
  size: 24,
  color: 'white',
})`
  height: 24px;
  width: 24px;
  color: white;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

export const FavCount = styled(Text)`
  color: white;
  margin-right: 4px;
  font-size: 13px;
`;

export const FavContainer = styled(View)`
  flex-direction: row;
  position: absolute;
  right: 0;
  margin: 8px 8px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 5px;
`;
