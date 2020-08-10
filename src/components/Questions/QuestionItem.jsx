import React, { useState } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import './Questions.css';
import open from './open.svg';
import close from './close.svg';

function QuestionItem({ question }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Accordion>
      <Card className="qustion__card my-4">
        <Card.Header>
          <p className={isOpen && 'open-question'}>{question.question}</p>
          <Accordion.Toggle
            eventKey={question.id}
            onClick={(e) => setIsOpen(!isOpen)}
          >
            {' '}
            <img src={isOpen ? close : open} alt="" />
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={question.id}>
          <Card.Body>{question.anaswer}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default QuestionItem;
