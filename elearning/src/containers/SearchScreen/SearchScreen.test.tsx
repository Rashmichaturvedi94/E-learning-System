import React from 'react';
import { render } from '@testing-library/react-native';
import { SearchScreen } from './SearchScreen';

describe('components/SearchScreen', () => {
  it('should render', () => {
    const component = render(<SearchScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
