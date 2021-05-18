import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { Icon } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
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

function Item({ item }) {
  return (
    <ListItemView>
      <ListImage source={{ uri: item.url }} />
      <ListItemContainer>
        <ListTitle>{item.title}</ListTitle>
        <Text>{item.desc}</Text>
      </ListItemContainer>
      <TouchPlay>
        <Icon name="info" />
      </TouchPlay>
    </ListItemView>
  );
}

export const CourseDetailsScreen = () => {
  const { params } = useRoute();
  const { course } = params;
  const [lessonStore, setLessonStore] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    firestore()
      .collection(`${course.ref}/lesson`)
      .orderBy('title')
      .get()
      .then((query) => {
        const arr1 = [];
        query.forEach((doc) => {
          arr1.push(doc.data());
        });
        setLessonStore(arr1);
      });
  }, []);
  const handleItemPress = (item: any) => {
    navigation.navigate('videoPlayer', { score: item.score });
  };
  return (
    <Container>
      <View style={{ flex: 2 }}>
        <Image
          style={styles.mainImage}
          source={{
          uri:`${course.image_url}`,
      }}
        />
      </View>
      <ListView>
        <FlatList
          style={{ flex: 1, marginTop: 100 }}
          data={lessonStore}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <Item item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
        />
      </ListView>
    </Container>
  );
};
