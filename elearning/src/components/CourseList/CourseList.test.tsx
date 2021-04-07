import React from 'react';
import { render } from '@testing-library/react-native';
import { CourseList } from './CourseList';

describe('components/CourseList', () => {
  it('should render', () => {
    const component = render(<CourseList />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
