import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { Text } from 'react-native-svg';
import {
  FirstName,
  LastName,
  OccupationText,
  EmailText,
  ProfileImage,
  TitleText,
} from './ProfileScreen.styles';
import { Container } from 'containers/CreateAccountScreen/CreateAccountScreen.styles';

// export const ProfileScreen = () => {};
export const ProfileScreen = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <View style={{ flex: 3, backgroundColor: 'black' }}>
        <TitleText>Profile</TitleText>
        <View
          style={[
            styles.container,
            {
              flexDirection: 'row',
            },
          ]}
        >
          <View style={{ flex: 1, backgroundColor: 'black' }}>
            <ProfileImage
              source={{
                uri:
                  'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
              }}
            />
          </View>
          <View style={{ flex: 2, backgroundColor: 'black' }}>
            <FirstName>Sukhwinder</FirstName>
            <LastName>Singh</LastName>
            <OccupationText>Student</OccupationText>
          </View>
        </View>
      </View>
      <View style={{ flex: 5, backgroundColor: 'green' }}>
        <EmailText>abc@gmail.com</EmailText>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});
