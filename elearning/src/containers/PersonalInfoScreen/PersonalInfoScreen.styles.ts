import styled from 'styled-components/native';
import {
  SafeAreaView,
  TextInput,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

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
  color: #ffffff;
`;

export const LanguageContainer = styled(View)`
  margin-top: 50px;
  justify-content: space-between;
  border-bottom-color: #b0adac;
  border-bottom-width: 0.5px;
  border-color: white;
`;

export const DropDown = styled(DropDownPicker).attrs({
  containerStyle: { height: 40 },
  itemStyle: {
    justifyContent: 'flex-start',
  },
  dropDownStyle: { backgroundColor: '#fafafa' },
})`
  right: 0;
  height: 40px;
`;
