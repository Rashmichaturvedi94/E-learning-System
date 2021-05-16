import React from 'react';
import { render } from '@testing-library/react-native';
import { CollapsibleView } from './CollapsibleView';

describe('components/CollapsibleView', () => {
  it('should render', () => {
    const component = render(<CollapsibleView />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
