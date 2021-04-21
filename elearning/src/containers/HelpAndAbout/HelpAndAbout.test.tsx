import React from 'react';
import { render } from '@testing-library/react-native';
import { HelpAndAbout } from './HelpAndAbout';

describe('containers/HelpAndAbout', () => {
  it('should render', () => {
    const component = render(<HelpAndAbout />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
