import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import QuestionItem from './QuestionItem';

function Qustions() {
  const [questions] = useState([
    {
      question: 'who can use this website?',
      answer: 'the website is for anyone that went to find doctor easily',
      id: 1,
    },
    { question: 'how are u', answer: 'a im fine', id: 2 },
    { question: 'how are u', answer: 'a im fine', id: 3 },
  ]);

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
