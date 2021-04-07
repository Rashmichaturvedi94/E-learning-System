import React from 'react';
import { render } from '@testing-library/react-native';
import { ProfileScreen } from './ProfileScreen';

describe('containers/ProfileScreen', () => {
  it('should render', () => {
    const component = render(<ProfileScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
