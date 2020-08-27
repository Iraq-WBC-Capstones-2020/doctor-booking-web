import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import Flatpickr from 'react-flatpickr';
import SideNav from '../SideNav/SideNav';
import { auth } from '../../../Firebase';
import { firebaseFunctions } from '../../../firebaseFunctions';

function DashboardSection() {
  const [date, setDate] = useState(new Date().toDateString());
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      firebaseFunctions.getAppointments(user.uid).then((data) => {
        setAppointments(data);
      });
    });
  }, [date]);

  const filterAppointments = () => {
    return appointments.filter((appointment) => {
      return appointment.date === date;
    });
  };

  return (
    <div className="container-fluid pl-0">
      <Row>
        <Col md={2}>
          <SideNav />
        </Col>
        <Col md={10} className="main-content">
          <Row>
            <Col md={5}>
              <div className="date-container mt-5 mx-5">
                <h2 className="mb-5">{date}</h2>
                <div id="line"></div>
              </div>
              <div className="appointments mt-5">
                {filterAppointments().map((appointment) => {
                  return (
                    <AppointmentCard
                      key={appointment.doctorUid}
                      appointment={appointment}
                    />
                  );
                })}
              </div>
            </Col>
            <Col md={5}>
              <Flatpickr
                className="calendar"
                options={{
                  enableTime: false,
                  inline: true,
                  monthSelectorType: 'static',
                }}
                onChange={(date) => setDate(new Date(date[0]))}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardSection;
