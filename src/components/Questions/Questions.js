import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import QuestionItem from './QuestionItem';

// const decoratedOnClick = useAccordionToggle(eventKey, onClick);

function Qustions() {
  const [questions] = useState([
    { question: 'how are u', answer: 'a im fine', id: 1 },
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
