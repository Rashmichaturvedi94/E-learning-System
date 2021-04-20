import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { SearchScreenProps } from './SearchScreen.interface';

export const SearchScreen = styled.View<Pick<SearchScreenProps, 'myProp'>>`
  /* Add styles here */
`;

export const TitleContainer = styled(View)`
  height: 140px;
  background-color: #2b2b2b;
  flex-direction: row;
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