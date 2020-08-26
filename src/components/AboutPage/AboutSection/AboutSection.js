import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import townImg from './imgs/undraw_quite_town_mg2q1.svg';
import clockImg from './imgs/clockImg.svg';
import searchImg from './imgs/searchImg.svg';

function AboutSection() {
  return (
    <Container className="section-container">
      <Row className="align-items-center justify-content-center row-container">
        <Col className="text-center text-md-left" md="4">
          <h2 className="section-header">About us</h2>
          <p>
            We are a team worked on this website to solve multiple problems the
            people face when they need to go to a doctor{' '}
          </p>
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
          <h2 className="section-header">Save your time</h2>
          <p>
            Save the time you always waste at clinics waiting rooms you just
            need to book the time that suits your schedule by one click
          </p>
        </Col>
        <Col className="order-md-1 d-flex justify-content-center" md="5">
          <img className="img-fluid" src={clockImg} alt="clock" />
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center row-container">
        <Col className="text-center text-md-left" md="4">
          <h2 className="section-header ">Find your doctor</h2>
          <p>
            Search for a doctor by speciality or by name or just explore the
            doctors and find the one that suites your need
          </p>
        </Col>
        <Col className="offset-md-1 d-flex justify-content-center" md="6">
          <img className="img-fluid" src={searchImg} alt="search" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;
