import React from 'react';
import { render } from '@testing-library/react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FeatureScreen } from './FeatureScreen';

const Stack = createStackNavigator();

describe('containers/FeatureScreen', () => {
  it('should render', () => {
    const component = render(
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Feature"
          screenOptions={{
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="Feature"
            component={FeatureScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
