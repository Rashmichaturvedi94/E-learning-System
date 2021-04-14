import styled from 'styled-components/native';
import { SafeAreaView, Text ,View, StyleSheet,TouchableOpacity} from 'react-native';



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

export const Container = styled(SafeAreaView)`
  flex: 0;
  margin: 0px;
  margin-top: 0px;
`;

export const TitleText = styled(Text)`
  color: white;
  align-self: flex-start;
  font-size: 34px;
  font-weight: bold;
  margin-top: 100px;
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
