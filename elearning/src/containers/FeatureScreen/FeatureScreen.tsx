import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TitleContainer, TitleText } from './FeatureScreen.styles';

export const FeatureScreen = () => (
  <View>
    <TitleContainer>
      <TitleText>Featured</TitleText>
    </TitleContainer>
    <Icon name="4k-plus" size={30} />
  </View>
);
