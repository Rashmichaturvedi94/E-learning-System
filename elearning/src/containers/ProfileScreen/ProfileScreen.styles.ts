import styled from 'styled-components/native';
import { SafeAreaView, Text, Image } from 'react-native';

export const TitleText = styled(Text)`
  color: white;
  align-self: flex-start;
  font-size: 34px;
  font-weight: bold;
  margin-top: 80px;
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
  color: black;
`;

export const Container = styled(SafeAreaView)`
  flex: 0;
  margin: 0px;
  margin-top: 0px;
`;
