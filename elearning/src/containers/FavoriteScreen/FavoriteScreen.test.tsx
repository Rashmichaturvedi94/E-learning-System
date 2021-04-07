import React from 'react';
import { render } from '@testing-library/react-native';
import { FavoriteScreen } from './FavoriteScreen';

describe('containers/FavoriteScreen', () => {
  it('should render', () => {
    const component = render(<FavoriteScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
