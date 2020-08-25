import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import penIntro from './img/penIntro.svg';
import intro from './img/intro.svg';
import './IntroSection.scss';
import '../HomePageGlobalStyle.scss';
import { useTranslation  } from 'react-i18next';
import i18next from 'i18next';

function IntroSection() {

  const { t, i18n } = useTranslation(['validation','common'])
 
  return (
    <div className="introSection">
      <img src={penIntro} className="penIntro" alt="" />
      <Container>
        <Row className=" my-5">
          <Col lg="6" className=" d-flex align-items-center">
            <div>
              <h1 className="my-3 sectionHeading">
              {t('validation:homePage.healthImportant.headLine.title')}{' '}
                <span className="d-block">{t('validation:homePage.healthImportant.headLine.titleSpan')}</span>
              </h1>
              <p className="sectionCaption">
              {t('validation:homePage.healthImportant.paragraph')}
              </p>
              <div className="my-4">
                <a href="#getInTouch">
                  <Button className="btn-lg sectionBtn" variant="primary">
                    Get Started
                  </Button>
                </a>
                <a href="#videoSection">
                  <Button
                    className="btn-lg ml-4 sectionBtn"
                    variant="outline-primary"
                  >
                   {t('common:introVideo')}
                  </Button>
                </a>
              </div>
            </div>
          </Col>
          <Col lg="6" className="">
            <img src={intro} className="img-fluid introSectionImage" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IntroSection;
