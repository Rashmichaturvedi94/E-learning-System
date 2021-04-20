import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
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
  font-size: 20px;
  font-weight: bold;
  margin: 0px 15px;
`;

export const styles = StyleSheet.create({
  pagerView: {
    height: 200,
    width: '100%'
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
  margin-top: 100px;
  margin-left: 10px;
`;