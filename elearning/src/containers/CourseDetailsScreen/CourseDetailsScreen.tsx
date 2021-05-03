import React, { useEffect, useState } from 'react';
import { styles } from './CourseDetailsScreen.styles';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Icon, ListItem } from 'react-native-elements';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{ uri: item.url }} style={{ width: 40, height: 40 }} />

      <View style={{ alignItems: 'flex-start', flex: 1, marginStart: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
        <Text>{item.desc}</Text>
      </View>

      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name="video" />
      </TouchableOpacity>
    </View>
  );
}

export const CourseDetailsScreen = () => {
  const DATA = [
    {
      name: 'Introduction',
      email: 'miyah.myles@gmail.com',
      position: 'OOPS, Poly',
      photo:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    },
    {
      name: 'June Cha',
      email: 'june.cha@gmail.com',
      position: 'Sales Manager',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Iida Niskanen',
      email: 'iida.niskanen@gmail.com',
      position: 'Sales Manager',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];
  const [lessonStore, setLessonStore] = useState();

  useEffect(() => {
    const lessonStore1 = firestore()
      .collection('course/c1/lesson').orderBy("title")
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
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <View style={{ flex: 2 }}>
      <Image style={styles.mainImage}
        source={{
          uri: 'https://miro.medium.com/max/8642/1*iIXOmGDzrtTJmdwbn7cGMw.png',
        }}
      />
      </View>
      <View style={{ flex: 3, backgroundColor: 'white' }}>
        <FlatList
          style={{ flex: 1, marginTop:100 }}
          data={lessonStore}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
};
