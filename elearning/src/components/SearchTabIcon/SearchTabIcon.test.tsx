import React from 'react';
import { render } from '@testing-library/react-native';
import { SearchTabIcon } from './SearchTabIcon';

describe('components/SearchTabIcon', () => {
  it('should render', () => {
    const component = render(<SearchTabIcon />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
