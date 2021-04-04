---
to: <%= root %>/<%= path %>/<%= name %>.test.tsx
---
import React from 'react';
import { render } from '@testing-library/react-native';
import { <%= name %> } from './<%= name %>';

describe('<%= title %>', () => {
  it('should render', () => {
    const component = render(<<%= name %> />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
