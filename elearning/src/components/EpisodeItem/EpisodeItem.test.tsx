import React from 'react';
import { render } from '@testing-library/react-native';
import { EpisodeItem } from './EpisodeItem';

describe('components/EpisodeItem', () => {
  it('should render', () => {
    const component = render(<EpisodeItem />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
