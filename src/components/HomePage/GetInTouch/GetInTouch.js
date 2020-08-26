import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import findeDoctor from './findDoctor.svg';
import doctorRegister from './doctorRegister.svg';
import '../HomePageGlobalStyle.scss';

function GetInTouch() {
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
                Find a doctor and <span className="d-block">make an</span>{' '}
                apoinnment online
              </h1>
              <p className="sectionCaption">
                Search for the best doctor for you and book an appointment at
                the time that fits your time
              </p>
              <div className="my-4">
                <Link to="/search">
                  <Button className="btn-lg sectionBtn" variant="primary">
                    Find Doctor
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
                You are Doctor?
                <span className="d-block">Register here</span>
              </h1>
              <p className="sectionCaption">
                With our website you are be more time manageable <br /> and you
                be comfortable about setting appoinments and dealing with your
                vistors
              </p>
              <div className="my-4">
                <Link to="/register">
                  <Button className="btn-lg sectionBtn">Register</Button>
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
