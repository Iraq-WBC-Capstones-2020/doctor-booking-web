import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GoalCard from './GoalCard';
import numberOneImg from './imgs/no1.svg';
import locationImg from './imgs/location.svg';
import awarenessImg from './imgs/awareness.svg';
function OurGoals() {
  return (
    <Container className="abSection">
      <Row className="justify-content-center">
        <h2 className="section-title">Our Goals</h2>
      </Row>
      <Row className="justify-content-between">
        <Col className="justify-content-center d-flex mt-5" md="4">
          <GoalCard
            img={numberOneImg}
            title="1st"
            text="one of our goals is to be best doctor booking website in Erbil"
          />
        </Col>
        <Col className="justify-content-center d-flex mt-5" md="4">
          <GoalCard
            img={locationImg}
            title="Register all clinics"
            text="Register all the clinics in Erbil so we offer the users the desired flexibility to choose the doctor that the user wants"
          />
        </Col>
        <Col className="justify-content-center d-flex mt-5" md="4">
          <GoalCard
            img={awarenessImg}
            title="Awareness"
            text="Reducnig the gatherings in clinics waiting rooms so we ensure the social distancing to be applied"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default OurGoals;
