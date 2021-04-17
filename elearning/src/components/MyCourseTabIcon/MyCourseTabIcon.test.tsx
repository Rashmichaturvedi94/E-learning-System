import React from 'react';
import { render } from '@testing-library/react-native';
import { MyCourseTabIcon } from './MyCourseTabIcon';

describe('components/MyCourseTabIcon', () => {
  it('should render', () => {
    const component = render(<MyCourseTabIcon />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
