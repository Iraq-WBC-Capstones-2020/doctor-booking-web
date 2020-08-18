import React, { useContext } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { InfoContext } from '../DoctorInfoContext';
import './style.css';

function TimeTable() {
  const [TimeDays] = useContext(InfoContext);

  return (
    <div className="timeTable">
      <Col>
        <Row className="ml-2 justify-content-start">
          <h4 className="specitial">{TimeDays.speciality}</h4>
        </Row>
        <Row className="ml-2 justify-content-start">
          <Table className="table-borderless">
            <thead>
              <tr>
                <h4>Time table</h4>
              </tr>
            </thead>
            <tbody>
              {TimeDays.days.map((myDay, index) => (
                <tr key={index}>
                  <td>{myDay.day}</td>

                  <td>{myDay.date}</td>
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
