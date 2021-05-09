import React, { FC } from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  ListItemView,
  ListImage,
  ListItemContainer,
  ListTitle,
  TouchPlay,
} from './EpisodeItem.styles';
import { EpisodeItemProps } from './EpisodeItem.interface';

export const EpisodeItem: FC<EpisodeItemProps> = ({ item }) => {
  return (
    <ListItemView>
      <ListImage source={{ uri: item.url }} />
      <ListItemContainer>
        <ListTitle>{item.title}</ListTitle>
        <Text>{item.desc}</Text>
      </ListItemContainer>
      <TouchPlay>
        <Icon name="info" />
      </TouchPlay>
    </ListItemView>
  );
};
