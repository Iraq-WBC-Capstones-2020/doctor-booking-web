import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMember from './TeamMember';
import { useTranslation } from 'react-i18next';
function OurTeam() {
  const { t, i18n } = useTranslation(['translation', 'validation']);

  return (
    <Container className="abSection ourTeam">
      <Row>
        <Container className="text-center mt-5 section-title">
          <h1>{t('validation:aboutPage.ourTeam.headLine')}</h1>
        </Container>
      </Row>
      <Row>
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
