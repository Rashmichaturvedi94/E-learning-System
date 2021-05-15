import { View, Image, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const BackContainer = styled(View)`
  flex-direction: row;
  position: absolute;
  left: 0;
  margin: 8px 8px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 5px;
`;

export const BackButton = styled(Icon).attrs({
  name: 'chevron-left',
  size: 24,
  color: 'white',
})`
  height: 24px;
  width: 24px;
  color: white;
  top: 0px;
  left: 0px;
  right: 50px;
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

export const BannerContainer = styled(View)`
  flex: 1;
`;

export const BannerImage = styled(Image)`
  width: 100%;
  height: 180px;
`;

export const InfoScroll = styled(ScrollView)`
  margin-top: 180px;
`;

export const InfoContainer = styled(View)`
  margin-top: 16px;
`;

export const AboutCourse = styled(Text)`
  text-align: center;
  font-weight: 700;
`;

export const Description = styled(Text)`
  font-weight: 200;
  margin: 8px 16px;
`;

export const Row = styled(View)`
  flex-direction: row;
  margin: 8px 16px;
`;

export const Label = styled(Text)`
  font-weight: 700;
`;

export const Author = styled(Text)`
  font-weight: 200;
  margin: 0px 8px;
`;

export const Duration = styled(Text)`
  font-weight: 200;
  margin: 0px 8px;
`;

export const BuyButton = styled(TouchableOpacity)`
  left: 16px;
  margin: 8px 0px;
  margin-right: 32px;
  height: 44px;
  background-color: rgba(33, 150, 83, 1);
  border-radius: 5px;
  justify-content: center;
`;

export const BuyLabel = styled(Text)`
  color: white;
  text-align: center;
`;

export const Separator = styled(View)`
  left: 16px;
  margin: 8px 0px;
  margin-right: 32px;
  margin-bottom: 16px;
  height: 1px;
  background-color: rgba(0, 0, 0, 1);
`;

export const TouchFav = styled(TouchableOpacity)`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

`;
