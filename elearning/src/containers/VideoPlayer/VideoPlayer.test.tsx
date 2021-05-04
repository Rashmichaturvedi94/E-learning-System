import React from 'react';
import { render } from '@testing-library/react-native';
import { VideoPlayer } from './VideoPlayer';

describe('containers/VideoPlayer', () => {
  it('should render', () => {
    const component = render(<VideoPlayer />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
