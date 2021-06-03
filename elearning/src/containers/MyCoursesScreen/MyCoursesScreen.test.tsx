import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MyCoursesScreen } from './MyCoursesScreen';

const Stack = createStackNavigator();

describe('containers/MyCoursesScreen', () => {
  it('should render', () => {
    const component = render(
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MyCourse"
          screenOptions={{
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="MyCourse"
            component={MyCoursesScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
