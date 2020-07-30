import React, { useState } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import './Questions.css';
import open from './open.svg';
import close from './close.svg';
import PropTypes from 'prop-types';

function QuestionItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  QuestionItem.propTypes = {
    text: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    answer: PropTypes.string.isRequired,
  };

  return (
    <Accordion>
      <Card className="qustion__card my-4">
        <Card.Header>
          <p className={isOpen && 'open-question'}>{props.question.text}</p>
          <Accordion.Toggle
            eventKey={props.question.id}
            onClick={() => setIsOpen(!isOpen)}
          >
            {' '}
            <img src={isOpen ? close : open} alt="" />
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={props.question.id}>
          <Card.Body>{props.question.answer}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default QuestionItem;
