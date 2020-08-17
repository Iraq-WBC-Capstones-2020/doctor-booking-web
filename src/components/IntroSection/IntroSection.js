import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import penIntro from './img/penIntro.svg';
import intro from './img/intro.svg';
import './IntroSection.scss';

function IntroSection() {
  return (
    <div className="introSection">
      <img src={penIntro} className="penIntro d-none d-lg-block" alt="" />
      <Container>
        <Row className=" my-5">
          <Col lg="6" className=" d-flex align-items-center">
            <div>
              <h1 className="my-3">
                Your health is important{' '}
                <span className="d-block">for us.</span>
              </h1>
              <p className="textShow">
                This website help you to find the best and suit doctor for your
                situation , and save you alot of time for searching doctor
              </p>
              <div className="my-4">
                <a href="#getInTouch">
                  <Button className="btn" variant="primary">
                    Get Started
                  </Button>
                </a>
                <a href="#video">
                  <Button className="btn ml-4" variant="outline-primary">
                    Intro Video
                  </Button>
                </a>
              </div>
            </div>
          </Col>
          <Col lg="6" className="">
            <img src={intro} className="img-fluid IntroSection__image" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IntroSection;
