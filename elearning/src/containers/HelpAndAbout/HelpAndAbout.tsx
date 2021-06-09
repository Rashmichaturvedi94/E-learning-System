import React from 'react';
import { CollapsibleView } from 'components/CollapsibleView';
import { ScrollView, View } from 'react-native';
import { Title, StyledDivider } from './HelpAndAbout.styles';

const qna = [
  {
    question: 'I forgot my password, what can I do?',
    answer:
      'click on the "Forgot your password?" Link on the login screen, enter e-mail address and link will be sent to you to set a new password.',
  },
  {
    question: 'How can I subscribe the course?',
    answer:
      'click on the course, click on the subscription button. You will be taken to the payment page where you can pay and subscribe the course.',
  },
  {
    question: 'Can I save the course?',
    answer: 'yes, you can save the course for future use.',
  },
  {
    question: 'Can I pause a course and continue at a later time?',
    answer:
      'The Course is divided into different modules. You can pause your learnign at any time and continue at a later time.',
  },
  {
    question: 'What technical equipment do I need for e-learning?',
    answer:
      'All you need is stable internet connection and device such as smartphone and tablet, It is also recommended to use headphones.',
  },
];

export const HelpAndAbout = () => (
  <View>
    <Title>FAQ</Title>
    <ScrollView>
      {qna.map((item, i) => (
        <View key={i.toString()}>
          <CollapsibleView question={item.question} answer={item.answer} />
          <StyledDivider />
        </View>
      ))}
    </ScrollView>
  </View>
);
