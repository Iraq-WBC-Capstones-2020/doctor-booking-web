import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation('validation');
  return (
    <footer className="text-white">
      <Container className="h-100 footer-container">
        <Row className="h-100 align-content-center row-container">
          <Col className="mb-3 first-col" md="3">
            <h5 className="linksHeader">{t('validation:footer.title')}</h5>
            <p>{t('validation:footer.paragraph')}</p>
          </Col>
          <Col md="3" className="mb-3 offset-md-2">
            <h5 className="linksHeader">
              {t('validation:footer.links.headLine')}
            </h5>

            <ul className="list-unstyled">
              <li>
                <Link to="/">{t('validation:footer.links.link1')}</Link>
              </li>
              <li>
                <Link to="/about">{t('validation:footer.links.link2')}</Link>
              </li>
              <li>
                <Link to="/faq">{t('validation:footer.links.link3')}</Link>
              </li>
            </ul>
          </Col>

          <Col md="3" className="mb-3 offset-md-1">
            <h5 className="linksHeader">
              {t('validation:footer.services.headLine')}
            </h5>

            <ul className="list-unstyled">
              <li>
                <Link to="/search">
                  {t('validation:footer.services.serv1')}
                </Link>
              </li>
              <li>
                <Link to="/register">
                  {t('validation:footer.services.serv2')}
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
