import React, { FC } from 'react';
import { HelpAndAbout as HelpAndAboutComponent } from './HelpAndAbout.styles';
import { HelpAndAboutProps } from './HelpAndAbout.interface';

export const HelpAndAbout: FC<HelpAndAboutProps> = ({ children }) => (
  <HelpAndAboutComponent>{children}</HelpAndAboutComponent>
);
