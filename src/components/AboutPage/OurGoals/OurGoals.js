import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GoalCard from './GoalCard';
import numberOneImg from './imgs/no1.svg';
import locationImg from './imgs/location.svg';
import awarenessImg from './imgs/awareness.svg';
import { useTranslation } from 'react-i18next';

function OurGoals() {
  const { t } = useTranslation(['translation', 'validation']);

  return (
    <Container className="abSection">
      <Row className="justify-content-center">
        <h2 className="section-title">
          {t('validation:aboutPage.ourGoals1.headLine')}
        </h2>
      </Row>
      <Row className="justify-content-between">
        <Col className="justify-content-center d-flex mt-5" md="4">
          <GoalCard
            img={numberOneImg}
            title={t('validation:aboutPage.ourGoals1.card1.headLine')}
            text={t('validation:aboutPage.ourGoals1.card1.paragraph')}
          />
        </Col>
        <Col className="justify-content-center d-flex mt-5" md="4">
          <GoalCard
            img={locationImg}
            title={t('validation:aboutPage.ourGoals1.card2.headLine')}
            text={t('validation:aboutPage.ourGoals1.card2.paragraph')}
          />
        </Col>
        <Col className="justify-content-center d-flex mt-5" md="4">
          <GoalCard
            img={awarenessImg}
            title={t('validation:aboutPage.ourGoals1.card3.headLine')}
            text={t('validation:aboutPage.ourGoals1.card3.paragraph')}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default OurGoals;
