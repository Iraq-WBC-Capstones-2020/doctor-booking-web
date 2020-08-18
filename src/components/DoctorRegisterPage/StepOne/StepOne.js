import React from 'react';
import './style.css';

import { Form, Row, Col, Button, Container } from 'react-bootstrap';

function StepOne() {
  return (
    <Container>
      <Form className="personal">
        <Row className="formRow">
          <Col lg={6}>
            <Form.Group>
              <Form.Label for="fullName">
                Full Name
                <Form.Control
                  name="fullName"
                  id="fullName"
                  placeholder="Full name"
                />
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
            <Form.Label for="E-mail">
              Email
              <Form.Control
                name="E-mail"
                id="E-mail"
                type="email"
                placeholder="Enter  your E-mail"
              />
            </Form.Label>
          </Col>
          <Col lg={6}>
            <Form.Label for="number">
              Phone Number
              <Form.Control
                name="number"
                id="number"
                type="tel"
                placeholder="ex: 0770-145-6788"
              />
            </Form.Label>
          </Col>
        </Row>

        <Row className="formRow">
          <Col lg={6}>
            <Form.Label for="thePassword">
              Password
              <Form.Control
                name="thePassword"
                id="thePassword"
                type="password"
                placeholder="Enter your password"
              />
            </Form.Label>
          </Col>
          <Col lg={6}>
            <Form.Label for="confirmPassword">
              Confirm Password
              <Form.Control
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Enter your password again"
              />
            </Form.Label>
          </Col>
        </Row>

        <Row className="formRow">
          <Col lg={12}>
            <label htmlFor="photoUplod">Personal Photo</label>
            <Button
              id="photoUplod"
              name="photoUplod"
              as="input"
              type="button"
              value="Upload"
            />{' '}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default StepOne;
