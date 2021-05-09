import React from 'react';
import { render } from '@testing-library/react-native';
import { SubscribeCourse } from './SubscribeCourse';

describe('containers/SubscribeCourse', () => {
  it('should render', () => {
    const component = render(<SubscribeCourse />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
