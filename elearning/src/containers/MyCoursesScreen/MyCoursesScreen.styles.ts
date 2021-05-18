import styled from 'styled-components/native';
import { Text, View, TouchableOpacity, Platform, Image } from 'react-native';

export const FirstName = styled(Text)`
  font-size: 30px;
  margin-top: 50px;
  color: white;
`;
export const LastName = styled(Text)`
  font-size: 30px;
  color: white;
`;
export const OccupationText = styled(Text)`
  margin-top: 10px;
  color: white;
`;

export const EmailText = styled(Text)`
  font-size: 00px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 60px;
  color: black;
`;

export const Container = styled(View)`
  flex: 1;
  flex-direction: column;
`;

export const TitleText = styled(Text)`
  color: white;
  align-self: flex-start;
  font-size: 34px;
  font-weight: bold;
  margin-top: ${Platform.OS === 'ios' ? 80 : 70}px;
  margin-left: 10px;
`;
export const TitleContainer = styled(View)`
  height: 140px;
  background-color: #2b2b2b;
  flex-direction: row;
`;

export const FavButtonContainer = styled(TouchableOpacity)`
  height: 30px;
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

export const TouchPlay = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const ListTextContainer = styled(View)`
  margin-left: 20px;
  flex: 1;
  align-items: flex-start;
`;

export const ListTitle = styled(Text)`
  font-weight: bold;
  font-size: 20px;
`;

export const ListImage = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const ListView = styled(View)`
  flex: 3;
  background-color: white;
`;
export const ListItemView = styled(View)`
  flex-direction: row;
  flex: 1;
  margin: 16px 8px 0px 16px;
`;

export const ListContainer = styled(View)`
  flex: 4;
  background-color: white;
`;

export const EmptyText = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  margin-top: 24px;
`;
