import styled from 'styled-components/native';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

export const TitleText = styled(Text)`
  color: white;
  align-self: flex-start;
  font-size: 34px;
  font-weight: bold;
  margin-top: ${Platform.OS === 'ios' ? 80 : 20}px;
  margin-left: 10px;
`;

export const ProfileImage = styled(Image)`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-top: 30px;
  margin-left: 20px;
`;

export const FirstName = styled(Text)`
  font-size: 30px;
  margin-top: 30px;
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
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 30px;
  color: black;
`;

export const TopContainer = styled(View)`
  flex: 3;
  background-color: black;
`;

export const ProfileRow = styled(View)`
  flex-direction: row;
  flex: 1;
`;

export const ProfileImageContainer = styled(View)`
  background-color: black;
  flex: 1;
`;

export const ProfileInfoContainer = styled(View)`
  flex: 2;
`;

export const BottomContainer = styled(View)`
  flex: 5;
  background-color: white;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  switchContainer: {
    flex: 1,
    padding: 0,
    right: -90,
  },
});
