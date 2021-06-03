import React from 'react';
import { render } from '@testing-library/react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { VideoPlayer } from './VideoPlayer';

const Stack = createStackNavigator();

describe('containers/VideoPlayer', () => {
  it('should render', () => {
    const component = render(
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="VideoPlayer"
          screenOptions={{
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="VideoPlayer"
            component={VideoPlayer}
            initialParams={{ score: 5 }}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
