import React from 'react';
import { render } from '@testing-library/react-native';
import { CreateAccountScreen } from './CreateAccountScreen';

describe('containers/CreateAccountScreen', () => {
  it('should render', () => {
    const component = render(<CreateAccountScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
