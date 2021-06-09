import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Divider } from 'react-native-elements';

export const Title = styled(Text)`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const StyledDivider = styled(Divider)`
  background-color: black;
  height: 1px;
  margin-left: 16px;
  margin-right: 16px;
`;
