import styled from 'styled-components/native';
import { CollapsibleViewProps } from './CollapsibleView.interface';
import { Text } from 'react-native';

export const Question = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin: 16px 16px;
`;

export const Answer = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  margin: 0px 16px;
  margin-bottom: 16px;
  color: gray;
`;
