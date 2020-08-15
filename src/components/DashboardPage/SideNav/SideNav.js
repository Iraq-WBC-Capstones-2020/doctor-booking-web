import React from 'react';
import { Nav } from 'react-bootstrap';
import editIcon from '../DashboardSection/imgs/edit.svg';
import profileIcon from '../AppointmentCard/imgs/person.svg';

function SideNav() {
  return (
    <div className="side-nav-container">
      <Nav className="d-none d-md-block sidebar ">
        <Nav.Item className="d-flex justify-content-evenly">
          <img src={profileIcon} alt="profile icon" />
          <Nav.Link href="#!">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-flex justify-content-evenly">
          <img src={editIcon} alt="edit icon" />
          <Nav.Link href="#!">Edit Profile</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default SideNav;
