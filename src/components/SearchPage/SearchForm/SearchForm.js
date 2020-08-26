import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Form, Col } from 'react-bootstrap';
import SearchIcon from './images/Search.svg';
import { db } from '../../../Firebase';
import { DoctorContext, ACTIONS } from '../../../DoctorContext';

import './style.css';
function SearchForm({ setFilterDoctors, input, setInput }) {
  const [spec, setSpec] = useState('');

  const [state, dispatch] = useContext(DoctorContext);

  const speciality = [
    'All',
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

  //grab date from firestore and put in global state
  useEffect(() => {
    db.collection('doctors').onSnapshot((snapshot) => {
      dispatch({
        type: ACTIONS.GET_DOCTORS,
        payload: { doctors: snapshot.docs.map((doc) => doc.data()) },
      });
    });
  }, []);

  useEffect(() => {
    setFilterDoctors(
      state.doctors.filter((doctor) => {
        return doctor.name.toLowerCase().includes(input.toLowerCase());
      })
    );
  }, [input]);

  function handleSubmit(e) {
    e.preventDefault();
    setFilterDoctors(
      state.doctors.filter((doctor) => {
        return (
          doctor.speciality === spec &&
          doctor.name.toLowerCase().includes(input.toLowerCase())
        );
      })
    );
    setInput('');
    setSpec('');
  }

  return (
    <div className="searchForm">
      <Container>
        <Row className="searchHead text-center">
          <Col lg={12}>
            <h1>Search for your Doctor</h1>
            <img src={SearchIcon} alt="search icon" />
          </Col>
        </Row>
        <Form.Row
          className="justify-content-center"
          as="form"
          onSubmit={handleSubmit}
        >
          <Col className="myCol" sm={4}>
            <Form.Control
              className="inputForm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Doctor name"
            />
          </Col>
          <Col className="myCol" sm={4}>
            <Form.Group
              className="inputForm"
              controlId="exampleForm.SelectCustom"
            >
              <Form.Control
                className="inputForm"
                as="select"
                value={spec}
                onChange={(e) => setSpec(e.target.value)}
                custom
              >
                {speciality.map((spec, index) => (
                  <option key={index}>{spec}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={2}>
            <button className="myButton" type="submit">
              Search
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-search"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </button>
          </Col>
        </Form.Row>
      </Container>
    </div>
  );
}

export default SearchForm;
