import { CourseItem } from 'components/CourseItem';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { CourseListProps } from './CourseList.interface';
import { CourseList as List } from './CourseList.styles';

export const CourseList: FC<CourseListProps> = ({ data, onItemPress }) => {
  return (
    <List
      horizontal
      data={data}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            accessible
            testID="CourseButton"
            onPress={() => {
              if (onItemPress) {
                onItemPress(item);
              }
            }}
          >
            <CourseItem item={item} />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
