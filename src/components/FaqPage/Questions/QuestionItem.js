import React, { useState } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import './Questions.css';
import open from './open.svg';
import close from './close.svg';
import PropTypes from 'prop-types';

function QuestionItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  QuestionItem.propTypes = {
    question: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  return (
    <Accordion>
      <div className="qustionCard my-5">
        <Card.Header>
          <p className={isOpen && 'openQuestion'}>{props.question.question}</p>
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
      </div>
    </Accordion>
  );
}

export default QuestionItem;
