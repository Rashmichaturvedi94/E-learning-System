import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { Text } from 'react-native-svg';
import {
  FirstName,
  LastName,
  OccupationText,
  EmailText,
  ProfileImage,
  TitleText,
  styles,
} from './ProfileScreen.styles';
import { Container } from 'containers/CreateAccountScreen/CreateAccountScreen.styles';
import { ListItem, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

// export const ProfileScreen = () => {};
export const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.navigate('Login');
      });
  };

  const list = [
    {
      title: 'Language',
      icon: 'language',
    },
    {
      title: 'ChangePassword',
      icon: 'lock',
    },
    {
      title: 'Settings',
      icon: 'settings',
    },
    {
      title: 'Notificatins',
      icon: 'notifications',
    },
    {
      title: 'Help',
      icon: 'help',
    },
    {
      title: 'About',
      icon: 'info',
    },
    {
      title: 'Logout',
      icon: 'logout',
    },
  ];
  const onItemPress = (index: number) => {
    if (index == 1) {
      navigation.navigate('CP');
    } else if (index == 4) {
      navigation.navigate('HandA');
    } else if (index == 5) {
      navigation.navigate('HandA');
    } else if (index == 6) {
      handleLogout();
    }
  };
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
      <View style={{ flex: 5, backgroundColor: 'white' }}>
        <EmailText>abc@gmail.com</EmailText>
        <ScrollView>
          {list.map((item, i) => (
            <ListItem
              key={i}
              bottomDivider
              onPress={() => {
                onItemPress(i);
              }}
            >
              <Icon name={item.icon} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
