import React from 'react';
import { render } from '@testing-library/react-native';
import { Course } from 'mocks/fixtures';
import { CourseItem } from './CourseItem';

describe('components/CourseItem', () => {
  it('should render', () => {
    const component = render(<CourseItem item={Course} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
