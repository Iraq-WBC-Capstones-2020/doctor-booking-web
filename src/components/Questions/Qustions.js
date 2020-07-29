import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import QuestionItem from './QuestionItem';

// const decoratedOnClick = useAccordionToggle(eventKey, onClick);

function Qustion() {
  const [questions] = useState([
    { text: 'how are u', answer: 'a im fine', id: 1 },
    { text: 'how are u', answer: 'a im fine', id: 2 },
    { text: 'how are u', answer: 'a im fine', id: 3 },
  ]);

  return (
    <div>
      <Container className="my-5">
        {/* <h1>the q gose here </h1>
        {questions.map((ques) => (
          <QuestionItem question={ques} />
        ))} */}

        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </Container>
    </div>
  );
}

export default Qustion;
