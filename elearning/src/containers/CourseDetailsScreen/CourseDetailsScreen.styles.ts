import styled from 'styled-components/native';
import { CourseDetailsScreenProps } from './CourseDetailsScreen.interface';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';

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
`;

export const Container = styled(View)`
  flex-direction: column;
  flex: 5;
  padding: 5px;
`;

export const styles = StyleSheet.create({
  pagerView: {
    height: 200,
    width: '100%',
  },
  mainImage: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
});
