import React from 'react';
import './style.css';

import { Form, Row, Col, Button, Container } from 'react-bootstrap';

function Step1() {
  return (
    <Container>
      <Form className="personal">
        <Row className="formRow">
          <Col lg={6}>
            <Form.Group>
              <Form.Label name="Full name">
                Full name
                <Form.Control placeholder="Full name" />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <fieldset>
              <Form.Group>
                <Form.Label name="formHorizontalRadios">
                  Gender
                  <div className="myCheck mt-2">
                    <Form.Check
                      type="radio"
                      label="female"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="male"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                  </div>
                </Form.Label>
              </Form.Group>
            </fieldset>
          </Col>
        </Row>
        <Row className="formRow">
          <Col lg={6}>
            <Form.Label name="E-mail">
              Email
              <Form.Control type="email" placeholder="Enter  your E-mail" />
            </Form.Label>
          </Col>
          <Col lg={6}>
            <Form.Label name="number">
              Phone number
              <Form.Control type="tel" placeholder="ex: 0770-145-6788" />
            </Form.Label>
          </Col>
        </Row>

        <Row className="formRow">
          <Col lg={6}>
            <Form.Label>
              Password
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Label>
          </Col>
          <Col lg={6}>
            <Form.Label>
              Confirm password
              <Form.Control
                type="password"
                placeholder="Enter your password again"
              />
            </Form.Label>
          </Col>
        </Row>

        <Row className="formRow">
          <Col lg={12}>
            <label name="photoUplod">personal photo</label>
            <Button
              src
              id="photoUplod"
              as="input"
              type="button"
              value="uplode"
            />{' '}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Step1;
