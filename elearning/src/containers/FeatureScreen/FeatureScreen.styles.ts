import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const TitleContainer = styled(View)`
  height: 140px;
  background-color: #2b2b2b;
  flex-direction: row;
`;

export const TitleText = styled(Text)`
  color: white;
  align-self: flex-end;
  margin-left: 8px;
  margin-bottom: 8px;
  font-size: 34px;
  font-weight: bold;
`;
