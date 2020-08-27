import React, { useContext } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { InfoContext } from '../DoctorInfoContext';
import './style.css';

function TimeTable() {
  const [DocInfos] = useContext(InfoContext);
  //take timetable from DocInfos
  const days = DocInfos.days;

  //convert timetable object to arrayof array
  let result;
  if (days) {
    result = Object.keys(days).map((key) => [String(key), days[key]]);
  }

  return (
    <div className="timeTable">
      <Col>
        <Row className="ml-2 justify-content-start">
          <h4 className="specitial">{DocInfos.speciality}</h4>
        </Row>
        <Row className="ml-2 justify-content-start">
          <Table className="table-borderless">
            <thead>
              <tr>
                <td className="h4">Time table</td>
              </tr>
            </thead>
            <tbody>
              {result?.map((myDay, index) => (
                <tr key={index}>
                  <td>{myDay[0]}</td>

                  <td>{myDay[1]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Col>
    </div>
  );
}

export default TimeTable;
