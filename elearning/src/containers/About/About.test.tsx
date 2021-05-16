import React from 'react';
import { render } from '@testing-library/react-native';
import { About } from './About';

describe('containers/About', () => {
  it('should render', () => {
    const component = render(<About />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
