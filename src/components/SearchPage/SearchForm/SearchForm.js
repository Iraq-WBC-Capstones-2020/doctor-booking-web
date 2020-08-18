import React from 'react';
import {
  Container,
  Row,
  Form,
  Col,
  DropdownButton,
  InputGroup,
  FormControl,
  Dropdown,
} from 'react-bootstrap';
import SearchIcon from './images/Search.png';

import './style.css';
function SearchForm() {
  const speciality = [
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
  return (
    <div className="searchForm">
      <Container>
        <Row>
          <div className="searchHead">
            <Col lg={12}>
              <h1>
                Search for your doctor
                <img src={SearchIcon} />
              </h1>
            </Col>
          </div>
        </Row>
        <Form.Row className="justify-content-center">
          <Col className="myCol" sm={4}>
            <Form.Control className="inputForm" placeholder="Doctor name" />
          </Col>
          <Col className="myCol" sm={4}>
          <Form.Group
              className="inputForm"
              controlId="exampleForm.SelectCustom"
            >
              <Form.Control className="inputForm" as="select" custom>
                {speciality.map((spec) => (
                  <option key={spec.id}>{spec}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={2}>
            <button className="myButton" as="input" value="Submit">
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
