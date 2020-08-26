import React from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoFrame from './images/Video.png';
import './style.css';
import { useTranslation } from 'react-i18next';

function VideoSection() {
  const { t, i18n } = useTranslation(['translation', 'validation']);

  return (
    <Container id="videoSection" className="videoSection">
      <Row>
        <div className="col-lg-6">
          <h1>
            {t('validation:homePage.videoSection.headLine')} <br />
          </h1>
        </div>

        <div className="col-lg-6">
          <div className="videoFrame">
            <img alt="Watch this video" src={VideoFrame} />
          </div>
        </div>
      </Row>
    </Container>
  );
}
export default VideoSection;
