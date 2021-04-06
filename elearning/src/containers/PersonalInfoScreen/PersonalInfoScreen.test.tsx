import React from 'react';
import { render } from '@testing-library/react-native';
import { PersonalInfoScreen } from './PersonalInfoScreen';

describe('containers/PersonelInfoScreen', () => {
  it('should render', () => {
    const component = render(<PersonalInfoScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
