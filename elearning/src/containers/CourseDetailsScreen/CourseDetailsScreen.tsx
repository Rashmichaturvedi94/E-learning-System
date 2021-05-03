import React, { useEffect, useState } from 'react';
import {
  ListImage,
  ListItemContainer,
  ListTitle,
  ListView,
  styles,
  TouchPlay,
  ListItemView,
  Container,
} from './CourseDetailsScreen.styles';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Icon } from 'react-native-elements';

function Item({ item }) {
  return (
    <ListItemView>
      <ListImage source={{ uri: item.url }}></ListImage>
      <ListItemContainer>
        <ListTitle>{item.title}</ListTitle>
        <Text>{item.desc}</Text>
      </ListItemContainer>
      <TouchPlay>
        <Icon name="info"></Icon>
      </TouchPlay>
    </ListItemView>
  );
}

export const CourseDetailsScreen = () => {
  const [lessonStore, setLessonStore] = useState();

  useEffect(() => {
    const lessonStore1 = firestore()
      .collection('course/c1/lesson')
      .orderBy('title')
      .get()
      .then((query) => {
        var arr1 = [];
        query.forEach((doc) => {
          //console.log('lessoon : ', doc.data());
          arr1.push(doc.data());
        });
        setLessonStore(arr1);
      });
  });
  return (
    <Container>
      <View style={{ flex: 2 }}>
        <Image
          style={styles.mainImage}
          source={{
            uri:
              'https://miro.medium.com/max/8642/1*iIXOmGDzrtTJmdwbn7cGMw.png',
          }}
        />
      </View>
      <ListView>
        <FlatList
          style={{ flex: 1, marginTop: 100 }}
          data={lessonStore}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.title}
        />
      </ListView>
    </Container>
  );
};
