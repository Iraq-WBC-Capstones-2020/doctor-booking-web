import React, { useEffect, useContext } from 'react';
import { Col, Form, Container, Row, Button } from 'react-bootstrap';
import './stepTwo.css';
import { DoctorContext, ACTIONS } from '../../../DoctorContext';
import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';

function StepTwo({ handleNextStep, handleBackStep }) {
  StepTwo.propTypes = {
    handleNextStep: propTypes.func,
    handleBackStep: propTypes.func,
  };
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    dispatch({
      type: ACTIONS.ADD_DOCTOR,
      doctorInfo: { ...values, ...state.doctorInfo },
    });
    handleNextStep();
  };

  const specilty = [
    'Abdominal radiology',
    'Breast imaging',
    'Cardiothoracic radiology',
    'Cardiovascular radiology',
    'Chest radiology',
    'Emergency radiology',
    'Endovascular surgical neuroradiology',
    'Gastrointestinal radiology',
    'Genitourinary radiology',
    'Head and neck radiology',
    'Pulmonary disease',
    'Sleep medicine',
    'Sports medicine',
    'Transplant hepatology',
  ];

  const [state, dispatch] = useContext(DoctorContext);
  useEffect(() => {
    console.log(state.doctorInfo);
  }, [state.doctorInfo]);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="formRow">
          <Col lg={12}>
            <Form.Group
              className="stepTwoFilds"
              controlId="exampleForm.SelectCustom"
            >
              <Form.Label>Speciality*</Form.Label>
              <Form.Control
                className="theSelect"
                as="select"
                custom
                name="speciality"
                value={state.doctorInfo.speciality}
                ref={register({
                  required: true,
                })}
                required
              >
                <option selected disabled>
                  Select a Speciality
                </option>
                {specilty.map((spec, index) => (
                  <option key={index}>{spec}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="formRow">
          <Col lg={6}>
            <Form.Group className="stepTwoFilds">
              <label htmlFor="exampleFormControlTextarea1">Education*</label>
              <textarea
                className="textArea form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="education"
                value={state.doctorInfo.education}
                ref={register({
                  required: true,
                })}
                required
              ></textarea>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="stepTwoFilds">
              <label htmlFor="exampleFormControlTextarea1">Experience*</label>
              <textarea
                className="textArea form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="experience"
                value={state.doctorInfo.experience}
                ref={register({
                  required: true,
                })}
                required
              ></textarea>
            </Form.Group>
          </Col>
        </Row>
        <Button className="mr-3" type="button" onClick={handleBackStep}>
          Back
        </Button>
        <Button type="submit">Next</Button>
      </Form>
    </Container>
  );
}

export default StepTwo;
