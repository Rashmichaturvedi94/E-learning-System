import React from 'react';
import { render } from '@testing-library/react-native';
import { FeatureScreen } from './FeatureScreen';

describe('containers/FeatureScreen', () => {
  it('should render', () => {
    const component = render(<FeatureScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
