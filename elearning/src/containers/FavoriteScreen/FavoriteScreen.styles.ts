import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { FavoriteScreenProps } from './FavoriteScreen.interface';

export const FavoriteScreen = styled.View<Pick<FavoriteScreenProps, 'myProp'>>`
  /* Add styles here */
`;

export const MenuContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 16px;
`;

export const ProfileImage = styled(Image)`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  align-self: center;
  margin-top: 50px;
`;

export const FavButtonContainer = styled(TouchableOpacity)<{
  selected: boolean;
}>`
  height: 50px;
  border-radius: 10px;
  margin: 30px 8px;
  justify-content: center;
  align-items: stretch;
  border-bottom-width: ${({ selected }) => (selected ? 2 : 0)}px;
  border-bottom-color: black;
`;

export const FavoriteButton = styled(Text)`
  color: #000000;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 0px 8px;
`;

export const styles = StyleSheet.create({
  pagerView: {
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 0,
  },
  badge: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export const TitleText = styled(Text)`
  color: white;
  align-self: flex-start;
  font-size: 34px;
  font-weight: bold;
  margin-top: ${Platform.OS === 'ios' ? 80 : 70}px;
  margin-left: 10px;
`;

export const FavnumContainer = styled(View)`
  background-color: black;
  height: 300px;
  width: 300px;
  border-radius: 150px;
  margin-top: 30px;
  align-self: center;
`;

export const ScoreText = styled(Text)`
  color: white;
  text-align: center;
  font-size: 90px;
  font-weight: bold;
  margin-top: 90px;
  align-self: center;
`;

export const EmptyText = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  margin-top: 24px;
`;
