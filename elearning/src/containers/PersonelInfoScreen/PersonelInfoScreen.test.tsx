import React from 'react';
import { render } from '@testing-library/react-native';
import { PersonelInfoScreen } from './PersonelInfoScreen';

describe('containers/PersonelInfoScreen', () => {
  it('should render', () => {
    const component = render(<PersonelInfoScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
