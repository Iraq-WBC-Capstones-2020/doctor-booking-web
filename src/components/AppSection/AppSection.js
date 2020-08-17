import React from 'react';
import { Row, Container } from 'react-bootstrap';
import appImg from './images/undraw_posting_photo_v65l.png';
import appStore from './images/AppStoreEng.png';
import googlePlay from './images/GooglePlayEng.png';
import './style.css';

function AppSection() {
  return (
    <div className="appContainer ">
      <Container className="applicationSection">
        <Row className="myRow">
          <div className="col-lg-6">
            <div className="text">
              <h2>Download our mobile apps (comming soon)</h2>
              <div className="underline"></div>
              <p>
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely
              </p>
            </div>
            <div className="downloadButtons">
              <input alt="On App store" type="image" src={appStore} />
              <input alt="On Google play" type="image" src={googlePlay} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="applicationImage">
              <img alt="our app" className="img-fluid" src={appImg} />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default AppSection;
