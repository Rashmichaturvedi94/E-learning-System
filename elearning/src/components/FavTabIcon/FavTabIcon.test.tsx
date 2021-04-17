import React from 'react';
import { render } from '@testing-library/react-native';
import { FavTabIcon } from './FavTabIcon';

describe('components/FavTabIcon', () => {
  it('should render', () => {
    const component = render(<FavTabIcon />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
