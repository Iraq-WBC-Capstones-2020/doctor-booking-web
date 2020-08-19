import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import Flatpickr from 'react-flatpickr';
import SideNav from '../SideNav/SideNav';

function DashboardSection() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const days = document.getElementsByClassName('flatpickr-day');
    console.log(days[0]);
    for (let i = 0; i < days.length; i++) {
      days[i].addEventListener('click', () => {
        days[i].classList.add('selected');
      });
    }
  }, []);

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
                <h2 className="mb-5">{date.toDateString()}</h2>
                <div id="line"></div>
              </div>
              <div className="appointments mt-5">
                <AppointmentCard />
                <AppointmentCard />
              </div>
            </Col>
            <Col md={5}>
              <div className="calendar-section d-flex justify-content-center">
                <Flatpickr
                  className="calendar"
                  options={{
                    enableTime: false,
                    inline: true,
                    monthSelectorType: 'static',
                  }}
                  onChange={(date) => setDate(new Date(date[0]))}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardSection;
