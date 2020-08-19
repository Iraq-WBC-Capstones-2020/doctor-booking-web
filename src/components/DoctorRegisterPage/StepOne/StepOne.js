import React, { useState, useEffect } from 'react';
import './style.css';

import { Form, Row, Col, Button, Container } from 'react-bootstrap';

function StepOne() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    console.log(gender);
  }, [gender]);
  const HandleChange = (setField, e) => setField(e.target.value);

  return (
    <Container>
      <div className="personal">
        <Row className="formRow">
          <Col lg={6}>
            <Form.Group>
              <Form.Label for="fullName">
                Full Name
                <Form.Control
                  name="fullName"
                  id="fullName"
                  placeholder="Full name"
                  onChange={(e) => HandleChange(setName, e)}
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
                      name="gender"
                      id="female"
                      value="female"
                      onChange={(e) => HandleChange(setGender, e)}
                    />
                    <Form.Check
                      type="radio"
                      label="male"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={(e) => HandleChange(setGender, e)}
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
                onChange={(e) => HandleChange(setEmail, e)}
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
                onChange={(e) => HandleChange(setPhoneNumber, e)}
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
                onChange={(e) => HandleChange(setPassword, e)}
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
            <label className="btn btn-primary text-white mt-3 ml-5">
              Upload <input type="file" hidden />
            </label>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default StepOne;
