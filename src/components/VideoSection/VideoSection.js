import React from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoFrame from './images/Video.png';
import './style.css';

function VideoSection() {
  return (
    <Container className="videoSection" id="video">
      <Row className="align-items-center">
        <div className="col-lg-6">
          <h1>
            To get more familiar <br />
            with the website
            <br />
            watch this video
            <br />
          </h1>
        </div>

        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="videoFrame">
            <img alt="Watch this video" src={VideoFrame} />
          </div>
        </div>
      </Row>
    </Container>
  );
}
export default VideoSection;
