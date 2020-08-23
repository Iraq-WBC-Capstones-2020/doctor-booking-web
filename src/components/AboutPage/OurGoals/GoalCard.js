import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
function GoalCard(props) {
  GoalCard.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  return (
    <Card className="goal-card">
      <Card.Img className="card-image mt-4" variant="top" src={props.img} />
      <Card.Body className="mt-3 mb-3">
        <Card.Title className="text-center card-title">
          {props.title}
        </Card.Title>
        <Card.Text className="text-center card-text px-3 pt-3">
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GoalCard;
