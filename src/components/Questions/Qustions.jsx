import React, { useState } from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import QuestionItem from './QuestionItem';

// const decoratedOnClick = useAccordionToggle(eventKey, onClick);

function Qustion() {
  const [questions, setQuestions] = useState([
    { question: 'how are u', anaswer: 'a im fine', id: 1 },
    { question: 'how are u', anaswer: 'a im fine', id: 2 },
    { question: 'how are u', anaswer: 'a im fine', id: 3 },
  ]);

  return (
    <div>
      <Container className="my-5">
        {/* <h1>the q gose here </h1>
        {questions.map((ques) => (
          <QuestionItem question={ques} />
        ))} */}

        {questions.map((question) => (
          <QuestionItem question={question} />
        ))}
      </Container>
    </div>
  );
}

export default Qustion;
