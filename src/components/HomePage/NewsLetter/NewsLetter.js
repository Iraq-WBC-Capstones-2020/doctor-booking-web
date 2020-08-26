import React from 'react';
import { Container, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import ButtonImg from './images/Slice1.png';
import './style.css';
import { useTranslation } from 'react-i18next';
function NewsLetter() {
  const { t, i18n } = useTranslation(['common', 'validation']);

  return (
    <Container className="newsLetter">
      <div className="theHead">
        <Row className="align-items-center justify-content-center">
          <h1>{t('validation:homePage.newsLetter.headLine')}</h1>
        </Row>
        <Row className="align-items-center justify-content-center">
          <p>{t('validation:homePage.newsLetter.paragraph')}</p>
        </Row>
      </div>
      <div className="email">
        <Row className="align-items-center justify-content-center">
          <Col sm={4}>
            <InputGroup className="mb-3">
              <FormControl
                className="inputFiled"
                placeholder={t('common:email')}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <input
                  type="image"
                  src={ButtonImg}
                  alt="Submit"
                  width="48"
                  height="48"
                />
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default NewsLetter;
