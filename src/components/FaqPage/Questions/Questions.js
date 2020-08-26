import React from 'react';
import { Container } from 'react-bootstrap';
import QuestionItem from './QuestionItem';
import { useTranslation } from 'react-i18next';

function Qustions() {
  const { t, i18n } = useTranslation('validation');
  const questions = [
    {
      question: t('validation:FAQ.question1.Q1'),
      answer: t('validation:FAQ.question1.A1'),
      id: 1,
    },
    {
      question: t('validation:FAQ.question2.Q1'),
      answer: t('validation:FAQ.question2.A1'),
      id: 2,
    },
    {
      question: t('validation:FAQ.question3.Q1'),
      answer: t('validation:FAQ.question3.A1'),
      id: 3,
    },
    {
      question: t('validation:FAQ.question4.Q1'),
      answer: t('validation:FAQ.question4.A1'),
      id: 4,
    },
    {
      question: t('validation:FAQ.question5.Q1'),
      answer: t('validation:FAQ.question5.A1'),
      id: 5,
    },
    {
      question: t('validation:FAQ.question6.Q1'),
      answer: t('validation:FAQ.question6.A1'),
      id: 6,
    },

    {
      question: t('validation:FAQ.question7.Q1'),
      answer: t('validation:FAQ.question7.A1'),
      id: 17,
    },
    {
      question: t('validation:FAQ.question8.Q1'),
      answer: t('validation:FAQ.question8.A1'),
      id: 8,
    },

    {
      question: t('validation:FAQ.question9.Q1'),
      answer: t('validation:FAQ.question9.A1'),
      id: 9,
    },
  ];

  return (
    <div>
      <Container className="my-5">
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </Container>
    </div>
  );
}

export default Qustions;
