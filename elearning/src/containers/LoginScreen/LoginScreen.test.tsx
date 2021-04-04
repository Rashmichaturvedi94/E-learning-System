import React from 'react';
import { render } from '@testing-library/react-native';
import { LoginScreen } from './LoginScreen';

describe('containers/LoginScreen', () => {
  it('should render', () => {
    const component = render(<LoginScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
