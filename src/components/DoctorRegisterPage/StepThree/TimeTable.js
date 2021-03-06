import React, { useState, useEffect, useContext } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import propTypes from 'prop-types';
import { DoctorContext, ACTIONS } from '../../../DoctorContext';

function TimeTableRow({ day, setTimeTable, timeTable }) {
  TimeTableRow.propTypes = {
    day: propTypes.string,
    setTimeTable: propTypes.func,
    timeTable: propTypes.object,
  };
  const [state, dispatch] = useContext(DoctorContext);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [isWorkingDay, setIsWorkingDay] = useState(false);

  useEffect(() => {
    if (isWorkingDay) {
      setTimeTable((prevTimeTable) =>
        Object.assign(prevTimeTable, { [day]: `${from}-${to}` })
      );
    }
    dispatch({
      type: ACTIONS.ADD_DOCTOR,
      doctorInfo: {
        ...state.doctorInfo,
        timeTable: timeTable,
      },
    });
  }, [isWorkingDay, from, to, timeTable]);

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
      <TimeTableRow
        day={'sunday'}
        setTimeTable={setTimeTable}
        timeTable={timeTable}
      />
      <TimeTableRow
        day={'monday'}
        setTimeTable={setTimeTable}
        timeTable={timeTable}
      />
      <TimeTableRow
        day={'tuesday'}
        setTimeTable={setTimeTable}
        timeTable={timeTable}
      />
      <TimeTableRow
        day={'wednesday'}
        setTimeTable={setTimeTable}
        timeTable={timeTable}
      />
      <TimeTableRow
        day={'thursday'}
        setTimeTable={setTimeTable}
        timeTable={timeTable}
      />
      <TimeTableRow
        day={'friday'}
        setTimeTable={setTimeTable}
        timeTable={timeTable}
      />
      <TimeTableRow
        day={'saturday'}
        setTimeTable={setTimeTable}
        timeTable={timeTable}
      />
    </>
  );
}

export default TimeTable;
