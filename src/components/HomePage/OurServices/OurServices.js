import React from 'react';
import { Container, Card, CardGroup, Row } from 'react-bootstrap';
import Freame from './images/Frame.png';
import Freame2 from './images/Frame-1.png';
import Freame3 from './images/undraw_map_1r691.png';
import '../HomePageGlobalStyle.scss';

import './style.css';
import { useTranslation } from 'react-i18next';

function OurServices() {
  const { t } = useTranslation('validation');
  return (
    <Container className="services-section">
      <Row>
        <div className="head">
          <h1>{t('homePage.OurServices.headLine')}</h1>

          <hr className="grayLine" />

          <p>{t('homePage.OurServices.paragraph')}</p>
        </div>
      </Row>

      <Row>
        <CardGroup>
          <Card className="border-0 m-4">
            <Card.Img variant="top" src={Freame} />
            <Card.Body>
              <Card.Title>
                {t('homePage.OurServices.card1.headLine')}
              </Card.Title>
              <Card.Text>{t('homePage.OurServices.card1.paragraph')}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 m-4">
            <Card.Img variant="top" src={Freame2} />
            <Card.Body>
              <Card.Title>
                {t('homePage.OurServices.card2.headLine')}
              </Card.Title>
              <Card.Text>{t('homePage.OurServices.card2.paragraph')}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 m-4">
            <Card.Img variant="top" src={Freame3} />
            <Card.Body>
              <Card.Title>
                {t('homePage.OurServices.card3.headLine')}
              </Card.Title>
              <Card.Text>{t('homePage.OurServices.card3.paragraph')}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
}

export default OurServices;
