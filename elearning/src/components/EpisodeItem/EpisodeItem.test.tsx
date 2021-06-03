import React from 'react';
import { render } from '@testing-library/react-native';
import { EpisodeItem } from './EpisodeItem';

const episode = {
  title: 'test',
  desc: 'testdec',
  url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Swift_logo.png',
};

describe('components/EpisodeItem', () => {
  it('should render', () => {
    const component = render(<EpisodeItem item={episode} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
