import { CourseList } from 'components/CourseList';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, SectionList, StatusBar } from 'react-native';
import { TitleContainer, TitleText } from './FeatureScreen.styles';

const data = [
  {
    title: 'Most Popular',
    data: [
      {
        courses: [
          {
            title: 'Basics of swift',
            imageUrl:
              'https://cdn01.zoomit.ir/2017/9/1dd4b9a0-3c47-453f-8ecb-48f76cef5cd0.jpg',
            favCount: 613,
          },
          {
            title: 'Basic of android',
            imageUrl:
              'https://techxerl.net/wp-content/uploads/2017/01/android-secret-and-hidden-codes-itechhacks.jpg',
            favCount: 234,
          },
        ],
      },
    ],
  },
  {
    title: 'Mobile',
    data: [
      {
        courses: [
          {
            title: 'Basics of swift',
            imageUrl:
              'https://cdn01.zoomit.ir/2017/9/1dd4b9a0-3c47-453f-8ecb-48f76cef5cd0.jpg',
            favCount: 539,
          },
          {
            title: 'Basic of android',
            imageUrl:
              'https://techxerl.net/wp-content/uploads/2017/01/android-secret-and-hidden-codes-itechhacks.jpg',
            favCount: 6789,
          },
        ],
      },
    ],
  },
];
export const FeatureScreen = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  });
  return (
    <View>
      <TitleContainer>
        <TitleText>Featured</TitleText>
      </TitleContainer>
      <SectionList
        sections={data}
        renderItem={({ section: { data } }) => {
          console.log(data);
          return <CourseList data={data[0].courses} />;
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
