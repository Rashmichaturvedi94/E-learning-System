import React, { FC, useEffect, useState } from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { getUser } from 'utils/utils';

import {
  ListImage,
  ListItemView,
  ListTextContainer,
  ListTitle,
  SearchScreen as SearchScreenComponent,
  TitleContainer,
  TitleText,
  TouchPlay,
} from './SearchScreen.styles';
import { FavIcon } from 'components/Icon';

export const SearchScreen = () => {
  const navigation = useNavigation();
  const state = {
    search: '',
  };
  const [user, setUser] = useState();
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);

  getUser().then((usr) => {
    setUser(usr);
  });
  const updateSearch = (search: String) => {
    setSearch(search);
  };
  const handleCoursePress = (course: any) => {
    navigation.navigate('Subscribe', { course });
  };

  const handleMarkFav = (course: any) => {
    var docRef = firestore().collection('user').doc(user?.uid);
    var o = {};
    docRef.update({
      favList: firestore.FieldValue.arrayUnion(course.ref),
    });
  };

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    firestore()
      .collection('course')
      //.where('title', '==', search)
      .where('title', '>=', search)
      .where('title', '<=', search + '\uf8ff')
      .get()
      .then((query) => {
        var arr2 = [];
        query.forEach((doc) => {
          arr2.push(doc.data());
        });
        setSearchList(arr2);
      });
  }, [search]);
  return (
    <View>
      <TitleContainer>
        <TitleText>Search</TitleText>
      </TitleContainer>
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />

        <FlatList
          key={searchList.length}
          data={searchList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                handleCoursePress(item);
              }}
            >
              <ListItemView>
                <ListImage source={{ uri: item.image_url }} />
                <ListTextContainer>
                  <ListTitle>{item.title}</ListTitle>
                  <Text>{item.desc}</Text>
                </ListTextContainer>
                <TouchPlay
                  onPress={() => {
                    handleMarkFav(item);
                  }}
                >
                  <FavIcon />
                </TouchPlay>
              </ListItemView>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          extraData={{ searchList }}
        />
      </View>
    </View>
  );
};
