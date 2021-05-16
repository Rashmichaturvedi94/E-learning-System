import React, { FC } from 'react';
import { View } from 'react-native';
import { Title, Version, Info } from './About.styles';
import { AboutProps } from './About.interface';

export const About = () => {
  return (
    <View>
      <Title>About Us</Title>
      <Version>Version 1.0</Version>
      <Info>
        This application provides the platform to learner and it is available
        around the clock over the internet using mobile application.
        Students/learner will be able to access the materials available in the
        system uploaded by authors/educational institutions. The System will
        provide the post-secondary education which will be available in english
        language.
      </Info>
    </View>
  )
};
