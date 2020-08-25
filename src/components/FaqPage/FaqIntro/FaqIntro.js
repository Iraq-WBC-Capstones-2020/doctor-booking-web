import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import intro from './intro.svg';
import './FaqIntro.css';

function FaqIntro() {
  return (
    <Container>
      <Row className="my-5">
        <Col lg="6" className=" d-flex align-items-center">
          <div>
            <h1 className="my-3">
              Frequently Asked<span className="d-block">Questions</span>
            </h1>
            <p className="faqText">
              Here is some frequently asked questions <br /> about the website,
              it will help you to get more <br /> info about the website {' '}
            </p>
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
