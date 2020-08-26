import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import findeDoctor from './findDoctor.svg';
import doctorRegister from './doctorRegister.svg';
import '../HomePageGlobalStyle.scss';
import { useTranslation } from 'react-i18next';

function GetInTouch() {
  const { t, i18n } = useTranslation(['common', 'validation']);
  return (
    <div id="getInTouch" className="getIntouch my-5 py-5">
      <Container>
        <Row className="">
          <Col lg="6" className="">
            <img
              src={findeDoctor}
              className="img-fluid IntroSection__image"
              alt=""
            />
          </Col>
          <Col lg="6">
            <div>
              <h1 className="my-3 sectionHeading">
                {t('validation:homePage.findDoc.headLine.title1')}{' '}
                <span className="d-block">
                  {' '}
                  {t('validation:homePage.findDoc.headLine.title2')}
                </span>{' '}
                {t('validation:homePage.findDoc.headLine.titleSpan')}
              </h1>
              <p className="sectionCaption">
                {t('validation:homePage.findDoc.paragraph')}
              </p>
              <div className="my-4">
                <Link to="/search">
                  <Button className="btn-lg sectionBtn" variant="primary">
                    {t('common:findDoctor')}
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <Col lg="6">
            <div>
              <h1 className="my-3 sectionHeading">
                {t('validation:homePage.docRig.headLine.title1')}
                <span className="d-block">
                  {t('validation:homePage.docRig.headLine.titleSpan')}
                </span>
              </h1>
              <p className="sectionCaption">
                {t('validation:homePage.docRig.paragraph')}
              </p>
              <div className="my-4">
                <Link to="/register">
                  <Button className="btn-lg sectionBtn">
                    {t('common:register')}
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg="6" className=" ">
            <img
              src={doctorRegister}
              className="img-fluid IntroSection__image"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GetInTouch;
