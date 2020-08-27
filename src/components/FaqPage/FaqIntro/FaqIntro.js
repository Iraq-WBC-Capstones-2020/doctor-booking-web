import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import intro from './intro.svg';
import './FaqIntro.css';
import { useTranslation } from 'react-i18next';

function FaqIntro() {
  const { t } = useTranslation('validation');
  return (
    <Container>
      <Row className="my-5">
        <Col lg="6" className=" d-flex align-items-center">
          <div>
            <h1 className="my-3">
              {t('validation:FAQ.headLine')}
              <span className="d-block">{t('validation:FAQ.headLine2')}</span>
            </h1>
            <p className="faqText">{t('validation:FAQ.paragraph')} </p>
          </div>
        </Col>
        <Col lg="6" className="">
          <img src={intro} className="img-fluid introSectionImage" alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default FaqIntro;
