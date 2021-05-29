import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeIcon } from 'components/Icon';
import { TabBarIcon } from './TabBarIcon';

describe('components/TabBarIcon', () => {
  it('should render', () => {
    const component = render(<TabBarIcon Icon={HomeIcon} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
