import React from 'react';
import { Container, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import ButtonImg from './images/Slice 1.png';
import './style.css';
function NewsLetter() {
  return (
    <Container className="NewsLetter">
      <div className="theHead">
        <Row className="align-items-center justify-content-center">
          <h1>Never miss an update</h1>
        </Row>
        <Row className="align-items-center justify-content-center">
          <p>Signup to get any update and serves we add </p>
        </Row>
      </div>
      <div className="Email">
        <Row className="align-items-center justify-content-center">
          <Col sm={4}>
            <InputGroup className="mb-3">
              <FormControl
                className="inputFiled"
                placeholder="Recipient's username"
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
