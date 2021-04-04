---
to: <%= root %>/<%= path %>/<%= name %>.styles.ts
---
import styled from 'styled-components/native';
import { <%= name %>Props } from './<%= name %>.interface';

export const <%= name %> = styled.View<Pick<<%= name %>Props, 'myProp'>>`
  /* Add styles here */
`;
