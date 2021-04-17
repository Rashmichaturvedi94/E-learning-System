import React from 'react';
import { render } from '@testing-library/react-native';
import { ProfileTabIcon } from './ProfileTabIcon';

describe('components/ProfileTabIcon', () => {
  it('should render', () => {
    const component = render(<ProfileTabIcon />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
