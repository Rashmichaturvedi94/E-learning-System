import styled from 'styled-components/native';
import { SafeAreaView, Text, Image, StyleSheet, Platform } from 'react-native';

export const TitleText = styled(Text)`
  color: white;
  align-self: flex-start;
  font-size: 34px;
  font-weight: bold;
  margin-top: ${ Platform.OS === 'ios' ? 80 : 20}px;
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

export const Container = styled(SafeAreaView)`
  flex: 0;
  margin: 0px;
  margin-top: 0px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});
