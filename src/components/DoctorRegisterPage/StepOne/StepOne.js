import React, { useContext, useState } from 'react';
import './style.css';
import { DoctorContext, ACTIONS } from '../../../DoctorContext';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';

function StepOne({ handleNextStep }) {
  StepOne.propTypes = {
    handleNextStep: propTypes.func,
  };
  const [state, dispatch] = useContext(DoctorContext);
  const [img, setImg] = useState({});
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    dispatch({ type: ACTIONS.ADD_DOCTOR, doctorInfo: { img: img, ...values } });
    handleNextStep();
  };

  const handleImg = (e) => {
    setImg(e.target.files[0]);
    alert('your photo uploaded successfully');
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <div className="personal">
          <Row className="formRow">
            <Col lg={6}>
              <Form.Group>
                <Form.Label for="fullName">
                  Full Name*
                  <Form.Control
                    name="name"
                    id="name"
                    value={state.doctorInfo.name}
                    placeholder="Full name"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                        message: 'name invalid',
                      },
                    })}
                    required
                  />
                </Form.Label>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <fieldset>
                <Form.Group>
                  <Form.Label name="formHorizontalRadios">
                    Gender*
                    <div className="myCheck mt-2">
                      <Form.Check
                        type="radio"
                        label="female"
                        name="gender"
                        id="female"
                        value="female"
                        ref={register({
                          required: true,
                        })}
                        required
                      />
                      <Form.Check
                        type="radio"
                        label="male"
                        name="gender"
                        id="male"
                        value="male"
                        ref={register({
                          required: true,
                        })}
                        required
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
                Email*
                <Form.Control
                  name="email"
                  id="E-mail"
                  type="email"
                  placeholder="Enter your E-mail"
                  value={state.doctorInfo.email}
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address',
                    },
                  })}
                  required
                />
              </Form.Label>
            </Col>
            <Col lg={6}>
              <Form.Label for="number">
                Phone Number*
                <Form.Control
                  name="phoneNumber"
                  id="number"
                  type="tel"
                  placeholder="ex: 0770-145-6788"
                  value={state.doctorInfo.phoneNumber}
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[(]{0,1}[0-9]{4}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/,
                      message: 'invalid phone number',
                    },
                  })}
                  required
                />
              </Form.Label>
            </Col>
          </Row>

          <Row className="formRow">
            <Col lg={6}>
              <Form.Label for="thePassword">
                Password*
                <Form.Control
                  name="password"
                  id="thePassword"
                  type="password"
                  placeholder="Enter your password"
                  value={state.doctorInfo.password}
                  ref={register({
                    required: true,
                    min: 6,
                  })}
                  required
                />
              </Form.Label>
            </Col>
            <Col lg={6}>
              <Form.Label for="confirmPassword">
                Confirm Password*
                <Form.Control
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={state.doctorInfo.confirmPassword}
                  placeholder="Enter your password again"
                  ref={register({
                    required: true,
                    min: 6,
                  })}
                  required
                />
              </Form.Label>
            </Col>
          </Row>

          <Row className="formRow">
            <Col lg={12}>
              <label htmlFor="photoUplod">Personal Photo*</label>
              <label className="btn btn-primary text-white mt-3 ml-5">
                Upload{' '}
                <input
                  name="img"
                  type="file"
                  onChange={handleImg}
                  hidden
                  required
                />
              </label>
            </Col>
          </Row>
        </div>
        <Button className="disabled mr-3">Back</Button>
        <Button type="submit">Next</Button>
      </Container>
    </Form>
  );
}

export default StepOne;
