import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import townImg from './imgs/undraw_quite_town_mg2q1.svg';
import clockImg from './imgs/clockImg.svg';
import searchImg from './imgs/searchImg.svg';
import { useTranslation } from 'react-i18next';

function AboutSection() {
  const { t } = useTranslation(['translation', 'validation']);
  return (
    <Container className="section-container">
      <Row className="align-items-center justify-content-center row-container">
        <Col className="text-center text-md-left" md="4">
          <h2 className="section-header">
            {t('validation:aboutPage.aboutUs.headLine')}
          </h2>
          <p>{t('validation:aboutPage.aboutUs.paragraph')} </p>
        </Col>
        <Col className="offset-md-1 d-flex justify-content-center" md="6">
          <img className="img-fluid" src={townImg} alt="town" />
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center row-container">
        <Col
          className="offset-md-1 order-md-12 text-center text-md-left"
          md="6"
        >
          <h2 className="section-header">
            {t('validation:aboutPage.saveTime.headLine')}
          </h2>
          <p>{t('validation:aboutPage.saveTime.paragraph')}</p>
        </Col>
        <Col className="order-md-1 d-flex justify-content-center" md="5">
          <img className="img-fluid" src={clockImg} alt="clock" />
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center row-container">
        <Col className="text-center text-md-left" md="4">
          <h2 className="section-header ">
            {t('validation:aboutPage.findDoctor.headLine')}
          </h2>
          <p>{t('validation:aboutPage.findDoctor.paragraph')}</p>
        </Col>
        <Col className="offset-md-1 d-flex justify-content-center" md="6">
          <img className="img-fluid" src={searchImg} alt="search" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;
