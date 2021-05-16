import styled from 'styled-components/native';
import { Text } from 'react-native';
import { AboutProps } from './About.interface';

export const Title = styled(Text)`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const Version = styled(Text)`
  color: gray;
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Info = styled(Text)`
  color: gray;
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
