import React from 'react';
import { render } from '@testing-library/react-native';
import { MyCoursesScreen } from './MyCoursesScreen';

describe('containers/MyCoursesScreen', () => {
  it('should render', () => {
    const component = render(<MyCoursesScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
