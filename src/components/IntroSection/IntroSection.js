import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import intro from './intro.svg';
import penIntro from './penIntro.svg';
import './IntroSection.css';

function IntroSection() {
  return (
    <div className="introSection">
      <img src={penIntro} className="penIntro" alt="" />
      <Container>
        <Row className="border my-5">
          <Col lg="6" className=" d-flex align-items-center">
            <div>
              <h1 className="my-3">
                Your health is important{' '}
                <span className="d-block">for us.</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis officiis recusandae voluptatibus! Natus voluptatum
                esse temporibus saepe quo omnis alias!
              </p>
              <div className="my-4">
                <Button className="btn-lg" variant="primary">
                  Get Started
                </Button>
                <Button className="btn-lg ml-4" variant="outline-primary">
                  Intro Video
                </Button>
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
