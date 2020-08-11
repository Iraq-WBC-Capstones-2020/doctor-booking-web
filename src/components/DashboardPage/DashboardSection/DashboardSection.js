import React from 'react';
import { Row, Nav, Container } from 'react-bootstrap';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

function DashboardSection() {
  return (
    <div className="container-fluid">
      <Row>
        <div className="side-nav-container">
          <Nav className="col-md-12 d-none d-md-block sidebar ml-5 mt-5">
            <Nav.Item>
              <Nav.Link href="#!">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#!">Edit Profile</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Container className="main-content">
          <div className="date-container mt-5 mx-5">
            <h2 className="mb-5">18 March 2020</h2>
            <div id="line"></div>
          </div>
          <div className="appointments mt-5">
            <AppointmentCard />
            <AppointmentCard />
          </div>
        </Container>
        <div className="calendar"></div>
      </Row>
    </div>
  );
}

export default DashboardSection;
