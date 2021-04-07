import React from 'react';
import { render } from '@testing-library/react-native';
import { CourseItem } from './CourseItem';

describe('components/CourseItem', () => {
  it('should render', () => {
    const component = render(<CourseItem />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
