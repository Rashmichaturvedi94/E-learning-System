import styled from 'styled-components/native';
import { TouchableOpacity, View, Image, Text } from 'react-native';

export const TouchPlay = styled(TouchableOpacity)`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const ListItemContainer = styled(View)`
  margin-left: 20px;
  flex: 1;
  align-items: flex-start;
`;

export const ListTitle = styled(Text)`
  font-weight: bold;
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
  margin: 0px 16px;
`;
