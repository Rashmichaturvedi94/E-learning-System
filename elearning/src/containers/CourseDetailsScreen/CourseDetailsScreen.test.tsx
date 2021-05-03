import React from 'react';
import { render } from '@testing-library/react-native';
import { CourseDetailsScreen } from './CourseDetailsScreen';

describe('containers/CourseDetailsScreen', () => {
  it('should render', () => {
    const component = render(<CourseDetailsScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
