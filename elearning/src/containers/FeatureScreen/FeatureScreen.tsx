import { CourseList } from 'components/CourseList';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, SectionList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { TitleContainer, TitleText } from './FeatureScreen.styles';

export const FeatureScreen = () => {
  const navigation = useNavigation();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  });
  useEffect(() => {
    firestore()
      .collection('course')
      .get()
      .then((query) => {
        const arr1 = [];
        query.forEach((doc) => {
          arr1.push(doc.data());
        });
        const formatted = [
          {
            title: 'Most Popular',
            data: [
              {
                courses: arr1,
              },
            ],
          },
          {
            title: 'Mobile',
            data: [
              {
                courses: arr1,
              },
            ],
          },
        ];
        setCourses(formatted);
        console.log(arr1);
      });
  }, []);
  const handleCoursePress = () => {
    navigation.navigate('Subscribe');
  };
  return (
    <View>
      <TitleContainer>
        <TitleText>Featured</TitleText>
      </TitleContainer>
      <SectionList
        sections={courses}
        renderItem={({ section: { data } }) => {
          console.log(data);
          return (
            <CourseList
              data={data[0].courses}
              onItemPress={handleCoursePress}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  itemStyle: {
    padding: 10,
  },
  headerFooterStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
  header: {
    fontSize: 18,
    margin: 8,
    fontWeight: '700',
    opacity: 0.6,
  },
});
