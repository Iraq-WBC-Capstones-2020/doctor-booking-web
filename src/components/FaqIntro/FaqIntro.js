import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import intro from './intro.svg';

function FaqIntro() {
  return (
    <Container>
      <Row className="my-5">
        <Col lg="6" className=" d-flex align-items-center">
          <div>
            <h1 className="my-3">
              Frequently asked<span className="d-block">questions</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis officiis recusandae voluptatibus! Natus voluptatum
              esse temporibus saepe quo omnis alias!
            </p>
          </div>
        </Col>
        <Col lg="6" className="">
          <img src={intro} className="img-fluid IntroSection__image" alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default FaqIntro;
