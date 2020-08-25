import React from 'react';
import { Row, Container } from 'react-bootstrap';
import appImg from './images/undraw_posting_photo_v65l.png';
import appStore from './images/AppStoreEng.png';
import googlePlay from './images/GooglePlayEng.png';
import '../HomePageGlobalStyle.scss';
import './style.css';
import { useTranslation } from 'react-i18next';

function AppSection() {
  const { t, i18n } = useTranslation(['common','validation']);

  return (
    <Container className="applicationSection">
      <Row className="myRow">
        <div className="col-xs-6">
          <div className="text">
            <h2>{t('validation:homePage.appSection.headLine')}</h2>
            <hr className="grayLine w-100" />
            <p>
            {t('validation:homePage.appSection.paragraph')}
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
