import React from 'react';
import { render } from '@testing-library/react-native';
import { ProfileScreen } from './ProfileScreen';
import { getFirstName } from './ProfileScreen';
import { getLastName } from './ProfileScreen';

describe('containers/ProfileScreen', () => {
  it('should render', () => {
    const component = render(<ProfileScreen />);
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
