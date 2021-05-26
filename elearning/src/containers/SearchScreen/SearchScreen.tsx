import React, { FC, useEffect, useState } from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { CollectionKeys, getUser } from 'utils/utils';

import { FavIcon } from 'components/Icon';
import { useQuery } from 'react-query';
import {
  ListImage,
  ListItemView,
  ListTextContainer,
  ListTitle,
  TitleContainer,
  TitleText,
  TouchPlay,
} from './SearchScreen.styles';

export const SearchScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  let arrayLength = 0;
  getUser().then((usr) => {
    setUser(usr);
  });
  const updateSearch = (searchText: string) => {
    setSearch(searchText);
  };
  const handleCoursePress = (course: any) => {
    navigation.navigate('Subscribe', { course });
  };

  const handleMarkFav = (course: any) => {
    const courseRef = firestore().doc(course.ref);
    courseRef.update({
      fav_count: firestore.FieldValue.increment(1),
    });
    const usrRef = firestore().collection(CollectionKeys.USER).doc(user?.uid);
    usrRef.update({
      favList: firestore.FieldValue.arrayUnion(course.ref),
    });
  };

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    firestore()
      .collection('course')
      .where('title', '>=', search)
      .where('title', '<=', search + '\uf8ff')
      .orderBy('title')
      .startAt(search)
      .endAt(search + '\uf8ff')
      .get()
      .then((query) => {
        var arr2 = [];
        query.forEach((doc) => {
          arr2.push(doc.data());
        });
        setSearchList(arr2);
      });
  }, [search]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    arrayLength = searchList.length;
  }, [searchList.length]);

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
          removeClippedSubviews
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
          extraData={arrayLength !== searchList.length}
        />
      </View>
    </View>
  );
};
