import React from 'react';
import { render } from '@testing-library/react-native';
import { ForgotPasswordScreen } from './ForgotPasswordScreen';

describe('containers/ForgotPasswordScreen', () => {
  it('should render', () => {
    const component = render(<ForgotPasswordScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
