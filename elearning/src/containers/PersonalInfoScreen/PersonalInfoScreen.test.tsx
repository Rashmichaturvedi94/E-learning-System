import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersonalInfoScreen } from './PersonalInfoScreen';

describe('containers/PersonelInfoScreen', () => {
  const Stack = createStackNavigator();
  it('should render', () => {
    const component = render(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PI">
          <Stack.Screen name="PI" component={PersonalInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
