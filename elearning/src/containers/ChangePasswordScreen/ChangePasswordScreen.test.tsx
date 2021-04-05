import React from 'react';
import { render } from '@testing-library/react-native';
import { ChangePasswordScreen } from './ChangePasswordScreen';

describe('containers/ChangePasswordScreen', () => {
  it('should render', () => {
    const component = render(<ChangePasswordScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
