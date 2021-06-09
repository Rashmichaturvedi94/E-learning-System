import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Course } from 'mocks/fixtures';
import { CourseDetailsScreen } from './CourseDetailsScreen';

describe('containers/CourseDetailsScreen', () => {
  const Stack = createStackNavigator();
  it('should render', () => {
    const component = render(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CourseDetails">
          <Stack.Screen
            name="CourseDetails"
            component={CourseDetailsScreen}
            initialParams={{ course: Course }}
          />
        </Stack.Navigator>
      </NavigationContainer>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
