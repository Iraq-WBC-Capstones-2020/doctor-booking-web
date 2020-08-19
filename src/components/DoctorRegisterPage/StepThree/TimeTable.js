import React, { useState, useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import propTypes from 'prop-types';

function TimeTableRow({ day, setTimeTable }) {
  TimeTableRow.propTypes = {
    day: propTypes.string,
    setTimeTable: propTypes.func,
  };

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [isWorkingDay, setIsWorkingDay] = useState(false);

  useEffect(() => {
    if (isWorkingDay) {
      setTimeTable((prevTimeTable) =>
        Object.assign(prevTimeTable, { [day]: `${from}-${to}` })
      );
    }
  }, [isWorkingDay, from, to]);
  const formatTime = (date) => date[0].toLocaleString().split(',')[1];

  return (
    <Row className="flex-row align-content-center mt-2 justify-content-center">
      <Col className="day-name" md={4}>
        <p>{day}</p>
      </Col>
      <Col className="d-flex flex-row justify-content-center" md={4}>
        <Form.Check
          onChange={() => setIsWorkingDay((prev) => !prev)}
          type="switch"
          id={day}
          label="Off day/Working day"
        />
      </Col>
      <Col className="d-flex flex-row justify-content-end" md={4}>
        <Flatpickr
          onChange={(e) => setFrom(formatTime(e))}
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
          onChange={(e) => setTo(formatTime(e))}
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
  const [timeTable, setTimeTable] = useState({});
  return (
    <>
      <TimeTableRow day={'sunday'} setTimeTable={setTimeTable} />
      <TimeTableRow day={'monday'} setTimeTable={setTimeTable} />
      <TimeTableRow day={'tuesday'} setTimeTable={setTimeTable} />
      <TimeTableRow day={'wednesday'} setTimeTable={setTimeTable} />
      <TimeTableRow day={'thursday'} setTimeTable={setTimeTable} />
      <TimeTableRow day={'friday'} setTimeTable={setTimeTable} />
      <TimeTableRow day={'saturday'} setTimeTable={setTimeTable} />
    </>
  );
}

export default TimeTable;
