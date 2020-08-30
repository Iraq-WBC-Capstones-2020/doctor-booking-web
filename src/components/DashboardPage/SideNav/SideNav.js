import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cal from './icons/calendar.svg';
import editIcon from './icons/edit.svg';
import profileIcon from '../AppointmentCard/imgs/person.svg';

function SideNav() {
  return (
    <div className="side-nav-container">
      <Nav className="d-none d-md-block sidebar">
        <Nav.Item className="d-flex justify-content-evenly">
          <img src={cal} alt="profile icon" />
          <Link to="/calender">Calendar</Link>
        </Nav.Item>

        <Nav.Item className="d-flex justify-content-evenly">
          <img src={profileIcon} alt="profile icon" />
          <Link to="/profile">Profile</Link>
        </Nav.Item>

        <Nav.Item className="d-flex justify-content-evenly">
          <img src={editIcon} alt="edit icon" />
          <Link to="/edit">Edit Profile</Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default SideNav;
