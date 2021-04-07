import React from 'react';
import { render } from '@testing-library/react-native';
import { TabBarIcon } from './TabBarIcon';

describe('components/TabBarIcon', () => {
  it('should render', () => {
    const component = render(<TabBarIcon />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
