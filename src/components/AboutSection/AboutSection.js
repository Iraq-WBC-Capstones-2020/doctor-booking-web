import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import townImg from './imgs/undraw_quite_town_mg2q1.svg';
function AboutSection() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md="4">
          <h2>About us</h2>
          <p>
            We are a team worked on this website to solve multiple problems the
            people face when they need to go to a doctor{' '}
          </p>
        </Col>
        <Col className="offset-md-2" md="6">
          <img src={townImg} alt="town" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;
