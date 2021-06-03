import React from 'react';
import { render } from '@testing-library/react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ProfileScreen, getFirstName, getLastName } from './ProfileScreen';

const Stack = createStackNavigator();

describe('containers/ProfileScreen', () => {
  it('should render', () => {
    const component = render(
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Profile"
          screenOptions={{
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

test('Split first name', () => {
  const fName = getFirstName('First Last');
  expect(fName).toBe('First');
});
test('Verify first name', () => {
  const fName = getFirstName('First Last');
  expect(fName).not.toBe('Last');
});

test('Verify first name trim', () => {
  const fName = getFirstName('   First Last     ');
  expect(fName).not.toBe('Last');
});

test('Split Last name', () => {
  const fName = getLastName('First Last');
  expect(fName).toBe('Last');
});
test('Verify first name', () => {
  const fName = getLastName('First Last');
  expect(fName).not.toBe('First');
});

test('Verify Last name trim', () => {
  const fName = getLastName('    First Last    ');
  expect(fName).not.toBe('First');
});
