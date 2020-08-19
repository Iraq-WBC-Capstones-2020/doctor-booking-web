import React, { useState, useEffect, useContext } from 'react';
import { Col, Form, Container, Row } from 'react-bootstrap';
import './stepTwo.css';
import { DoctorContext, ACTIONS } from '../../../DoctorContext';

function StepTwo() {
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
    'Pulmonary disease',
    'Sleep medicine',
    'Sports medicine',
    'Transplant hepatology',
  ];

  const [state, dispatch] = useContext(DoctorContext);
  const [speciality, setSpeciality] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  
  useEffect(() => {
    dispatch({
      type: ACTIONS.ADD_DOCTOR,
      doctorInfo: {
        ...state.doctorInfo,
        speciality: speciality,
        education: education,
        experience: experience,
      },
    });
  }, [speciality, education, experience]);

  const handleChange = (setField, e) => setField(e.target.value);
  
  return (
    <Container>
      <Form>
        <Row className="formRow">
          <Col lg={12}>
            <Form.Group
              className="stepTwoFilds"
              controlId="exampleForm.SelectCustom"
            >
              <Form.Label>Speciality</Form.Label>
              <Form.Control
                onChange={(e) => handleChange(setSpeciality, e)}
                className="theSelect"
                as="select"
                custom
              >
                {specilty.map((spec) => (
                  <option key={spec.id}>{spec}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="formRow">
          <Col lg={6}>
            <Form.Group className="stepTwoFilds">
              <label htmlFor="exampleFormControlTextarea1">Education</label>
              <textarea
                className="textArea form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => handleChange(setEducation, e)}
              ></textarea>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="stepTwoFilds">
              <label htmlFor="exampleFormControlTextarea1">Experience</label>
              <textarea
                className="textArea form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => handleChange(setExperience, e)}
              ></textarea>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default StepTwo;
