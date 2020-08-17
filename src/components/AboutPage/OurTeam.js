import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMember from './TeamMember';
function OurTeam() {
  return (
    <Container className="abSection">
      <Row>
        <Container className="text-center mt-5 section-title">
          <h1>Our Team</h1>
        </Container>
      </Row>
      <Row >
        <Col className="mt-5" lg="6">
          <TeamMember />
        </Col>
        <Col className="mt-5" lg="6">
          <TeamMember />
        </Col>
        <Col className="mt-5" lg="6">
          <TeamMember />
        </Col>
        <Col className="mt-5" lg="6">
          <TeamMember />
        </Col>
      </Row>
    </Container>
  );
}

export default OurTeam;
