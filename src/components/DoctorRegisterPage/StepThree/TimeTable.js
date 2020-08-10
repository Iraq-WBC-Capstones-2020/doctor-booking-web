import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

function TimeTableRow({ day }) {
  return (
    <Row className="flex-row align-content-center mt-2 justify-content-center">
      <Col className="day-name" md={4}>
        <p>{day}</p>
      </Col>
      <Col className="d-flex flex-row justify-content-center" md={4}>
        <Form.Check type="switch" id={day} label="Off day/Working day" />
      </Col>
      <Col className="d-flex flex-row justify-content-end" md={4}>
        <Flatpickr
          className="time-input mr-2"
          placeholder="e.g. 8:00"
          options={{
            enableTime: true,
            noCalendar: true,
            dateFormat: 'H:i',
            time_24hr: true,
          }}
        />
        {' - '}
        <Flatpickr
          className="time-input ml-2"
          placeholder="e.g. 19:00"
          options={{
            enableTime: true,
            noCalendar: true,
            dateFormat: 'H:i',
            time_24hr: true,
          }}
        />
      </Col>
    </Row>
  );
}
function TimeTable() {
  return (
    <>
      <TimeTableRow day={'sunday'} />
      <TimeTableRow day={'monday'} />
      <TimeTableRow day={'tuesday'} />
      <TimeTableRow day={'wednesday'} />
      <TimeTableRow day={'thursday'} />
      <TimeTableRow day={'friday'} />
      <TimeTableRow day={'saturday'} />
    </>
  );
}

export default TimeTable;
