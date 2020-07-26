import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import intro from './intro.svg';
import './IntroSection.css';

function IntroSection() {
  return (
    <div>
      <Row className="border my-5">
        <Col lg="6" className="border border-success d-flex align-items-center">
          <div>
            <h1 className="my-3">
              Your health is important <span className="d-block">for us.</span>
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
        <Col lg="6" className="border border-danger">
          <img
            src={intro}
            className="img-fluid"
            className="IntroSection__image"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
}

export default IntroSection;
