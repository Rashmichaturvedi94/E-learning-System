import React from 'react';
import { render } from '@testing-library/react-native';
import { FeaturedTabIcon } from './FeaturedTabIcon';

describe('components/FeaturedTabIcon', () => {
  it('should render', () => {
    const component = render(<FeaturedTabIcon />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
