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

export const ProfileImage = styled(Image)`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  align-self: center;
  margin-top: 50px;
`;

export const FavButtonContainer = styled(TouchableOpacity)`
  height: 50px;
  border-radius: 10px;
  margin: 30px 16px;
  justify-content: center;
  align-items: center;
`;

export const FavoriteButton = styled(Text)`
  color: #1b8ffa;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 0px 15px;
`;

export const PageText = styled(Text)`
  color: #1b8ffa;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 90px;
  align-self: center;
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
