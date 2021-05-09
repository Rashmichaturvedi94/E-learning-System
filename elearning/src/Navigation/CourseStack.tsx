import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FeatureScreen } from 'containers/FeatureScreen';
import { SubscribeCourse } from 'containers/SubscribeCourse';
import { CourseDetailsScreen } from 'containers/CourseDetailsScreen';
import { VideoPlayer } from 'containers/VideoPlayer';

const CourseStack = createStackNavigator();

export const CourseStackScreen = () => {
  return (
    <CourseStack.Navigator initialRouteName="featured">
      <CourseStack.Screen
        name="featured"
        component={FeatureScreen}
        options={{ headerShown: false }}
      />
      <CourseStack.Screen
        name="Subscribe"
        component={SubscribeCourse}
        options={{ headerShown: false }}
      />
      <CourseStack.Screen
        name="CourseDetails"
        component={CourseDetailsScreen}
        options={{ title: 'Course Contents' }}
      />
      <CourseStack.Screen
        name="videoPlayer"
        component={VideoPlayer}
        options={{ headerShown: false }}
      />
    </CourseStack.Navigator>
  );
};
