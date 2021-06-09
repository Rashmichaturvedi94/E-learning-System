import React, { FC, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Question, Answer } from './CollapsibleView.styles';
import { CollapsibleViewProps } from './CollapsibleView.interface';

export const CollapsibleView: FC<CollapsibleViewProps> = ({
  question,
  answer,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <View>
      <TouchableOpacity onPress={() => setIsCollapsed((oldValue) => !oldValue)}>
        <Question>{question}</Question>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <Answer>{answer}</Answer>
      </Collapsible>
    </View>
  );
};
