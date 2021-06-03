import React from 'react';
import { render } from '@testing-library/react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Course } from 'mocks/fixtures';
import { SubscribeCourse } from './SubscribeCourse';

const Stack = createStackNavigator();

describe('containers/SubscribeCourse', () => {
  it('should render', () => {
    const component = render(
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Subscribe"
          screenOptions={{
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="Subscribe"
            component={SubscribeCourse}
            options={{ headerShown: false }}
            initialParams={{ course: Course }}
          />
        </Stack.Navigator>
      </NavigationContainer>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
