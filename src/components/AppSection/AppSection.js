import React from 'react';
import { Row, Container } from 'react-bootstrap';
import appImg from './images/undraw_posting_photo_v65l.png';
import appStore from './images/App Store - eng.png';
import googlePlay from './images/Google Play - eng.png';
import './style.css';

function AppSection() {
  return (
    <Container className="ApplicationSection">
      <Row className="myRow">
        <div className="col-xs-6">
          <div className="text">
            <h2>Download our mobile apps (comming soon)</h2>
            <p>
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
          </div>
          <div className="download-buttons">
            <a href="#">
              <img alt="App store" src={appStore} />
            </a>
            <a href="#">
              <img alt="Google Play" src={googlePlay} />
            </a>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="Application-Image">
            <img alt="our app" src={appImg} />
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default AppSection;
