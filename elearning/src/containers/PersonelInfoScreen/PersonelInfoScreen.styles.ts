import styled from 'styled-components/native';
import { StyleSheet, SafeAreaView, TextInput, Text, TouchableHighlight } from 'react-native';
import { PersonelInfoScreenProps } from './PersonelInfoScreen.interface';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  margin: 0px 16px;
`;

export const TitleText = styled(Text)`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const Input = styled(TextInput)`
  height: 40px;
  margin-top: 50px;
  border-bottom-color: #b0adac;
  border-bottom-width: 0.5px;
  border-color: white;
`;

export const SaveButton = styled(TouchableHighlight)`
  height: 50px;
  border-radius: 10px;
  background-color: #1b8ffa;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const SaveText = styled(Text)`
  color: #FFFFFF;
`;
