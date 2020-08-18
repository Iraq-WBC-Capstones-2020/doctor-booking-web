import React from 'react';
import { Row, Container } from 'react-bootstrap';
import appImg from './images/undraw_posting_photo_v65l.png';
import appStore from './images/AppStoreEng.png';
import googlePlay from './images/GooglePlayEng.png';
import '../HomePageGlobalStyle.scss';
import './style.css';

function AppSection() {
  return (
    <Container className="applicationSection">
      <Row className="myRow">
        <div className="col-xs-6">
          <div className="text">
            <h2>Download our Mobile Application (Comming soon)</h2>
            <hr className="grayLine w-100" />
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
        <div className="col-xs-6">
          <div className="applicationImage">
            <img className="img-fluid" alt="our app" src={appImg} />
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default AppSection;
