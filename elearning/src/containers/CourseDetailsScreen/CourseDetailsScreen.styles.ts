import styled from 'styled-components/native';
import { CourseDetailsScreenProps } from './CourseDetailsScreen.interface';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pagerView: {
    height: 200,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 30,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  listItem: {
    backgroundColor: '#FFF',
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  mainImage: {
    //padding:50,
    //marginTop: 50,
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
});
