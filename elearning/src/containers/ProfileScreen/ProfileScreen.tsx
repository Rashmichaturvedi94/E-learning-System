import React, { FC, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore, { firebase } from '@react-native-firebase/firestore';
import {
  CollectionKeys,
  getUser,
  removeUser,
  setUserDefault,
} from 'utils/utils';
import { User } from 'models';
import {
  TopContainer,
  ProfileRow,
  ProfileImageContainer,
  ProfileInfoContainer,
  FirstName,
  LastName,
  OccupationText,
  EmailText,
  ProfileImage,
  TitleText,
  styles,
  BottomContainer,
} from './ProfileScreen.styles';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<User | undefined>();
  useEffect(() => {
    getUser().then(async (usr) => {
      if (usr != null) {
        const userDocument = await firestore()
          .collection(CollectionKeys.USER)
          .doc(usr.uid)
          .get();
        const userRes: User = {
          uid: usr.uid,
          email: usr.email,
          name: userDocument.data()?.name,
          Occupation: userDocument.data()?.occupation,
          language: userDocument.data()?.language,
        };
        setUser(userRes);
        setUserDefault(userRes);
      }
    });
  });

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        removeUser();
        navigation.navigate('Login');
      });
  };
  const getFirstName = (name?: string) => {
    const splitted = name?.split(' ', 2) ?? [''];
    return splitted[0] ?? '';
  };
  const getLastName = (name?: string) => {
    const splitted = name?.split(' ', 2) ?? [''];
    return splitted?.length ?? 0 > 1 ? splitted[1] : splitted[0];
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
    if (index === 1) {
      navigation.navigate('CP');
    } else if (index === 4) {
      navigation.navigate('HandA');
    } else if (index === 5) {
      navigation.navigate('HandA');
    } else if (index === 6) {
      handleLogout();
    }
  };
  return (
    <View style={styles.container}>
      <TopContainer>
        <TitleText>Profile</TitleText>
        <ProfileRow>
          <ProfileImageContainer>
            <ProfileImage
              source={{
                uri:
                  'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
              }}
            />
          </ProfileImageContainer>
          <ProfileInfoContainer>
            <FirstName>{getFirstName(user?.name)}</FirstName>
            <LastName>{getLastName(user?.name)}</LastName>
            <OccupationText>Student</OccupationText>
          </ProfileInfoContainer>
        </ProfileRow>
      </TopContainer>
      <BottomContainer>
        <EmailText>{user?.email}</EmailText>
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
      </BottomContainer>
    </View>
  );
};
