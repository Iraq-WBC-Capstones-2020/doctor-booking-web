import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import './GetInTouch.css';

import findeDoctor from './findDoctor.svg';
import doctorRegister from './doctorRegister.svg';

function GetInTouch() {
  return (
    <div className="getIntouch my-5 py-5">
      <Container>
        <Row className="">
          <Col lg="6" className="">
            <img
              src={findeDoctor}
              className="img-fluid IntroSection__image"
              alt=""
            />
          </Col>
          <Col lg="6" className=" ">
            <div>
              <h1 className="my-3">
                Find a doctor and <span className="d-block">make an</span>{' '}
                apoinnment online
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis officiis recusandae voluptatibus! Natus voluptatum
                esse temporibus saepe quo omnis alias!
              </p>
              <div className="my-4">
                <Button className="btn-lg" variant="primary">
                  Find Doctor
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className=" my-5">
          <Col lg="6">
            <div>
              <h1 className="my-3">
                You are Doctor?
                <span className="d-block">Register here</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis officiis recusandae voluptatibus! Natus voluptatum
                esse temporibus saepe quo omnis alias!
              </p>
              <div className="my-4">
                <Button className="btn-lg" variant="primary">
                  Register
                </Button>
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
