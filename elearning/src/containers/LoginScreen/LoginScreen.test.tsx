import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from '@testing-library/react-native';
import { LoginScreen } from './LoginScreen';

const Stack = createStackNavigator();

describe('containers/LoginScreen', () => {
  it('should render', () => {
    const component = render(
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
