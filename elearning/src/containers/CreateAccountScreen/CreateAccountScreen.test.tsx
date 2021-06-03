import React from 'react';
import { render } from '@testing-library/react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CreateAccountScreen } from './CreateAccountScreen';

const Stack = createStackNavigator();

describe('containers/CreateAccountScreen', () => {
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
            component={CreateAccountScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
