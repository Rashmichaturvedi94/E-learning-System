---
to: <%= root %>/<%= path %>/<%= name %>.tsx
---
import React, { FC } from 'react';
import { <%= name %> as <%= name %>Component } from './<%= name %>.styles';
import { <%= name %>Props } from './<%= name %>.interface';

export const <%= name %>: FC<<%= name %>Props> = ({ children }) => (
  <<%= name %>Component>{children}</<%= name %>Component>
)<%= null %>;
