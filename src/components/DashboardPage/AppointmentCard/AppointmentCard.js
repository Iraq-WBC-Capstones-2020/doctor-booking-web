import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import personImg from './imgs/person.svg';
import clockImg from './imgs/clock.svg';
import phoneImg from './imgs/phone.svg';
import emailImg from './imgs/email.svg';
import propTypes from 'prop-types';

function AppointmentCard({ appointment }) {
  AppointmentCard.propTypes = {
    appointment: propTypes.object,
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="small-appointment-card mx-5"
        variant="primary"
        onClick={handleShow}
      >
        <div className="d-flex align-items-center pt-3 pl-3">
          <img src={clockImg} alt="clock icon" />
          <p>
            {appointment.date} - {appointment.time}
          </p>
        </div>
        <div className="d-flex align-items-center pt-3 pl-3">
          <img src={personImg} alt="profile icon" />
          <p>{appointment.name}</p>
        </div>
      </div>

      <Modal className="modal-container" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ml-4">Appointment information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-4 d-flex flex-column">
          <div className="d-flex align-items-center mt-3 ml-4">
            <img src={clockImg} alt="clock icon" />
            <p>
              {appointment.date} - {appointment.time}
            </p>
          </div>
          <div className="d-flex align-items-center mt-4 ml-4">
            <img src={personImg} alt="profile icon" />
            <p>
              {appointment.name} - {appointment.gender}
            </p>
          </div>
          <div className="d-flex align-items-center mt-4 ml-4">
            <img src={phoneImg} alt="phone icon" />
            <p>{appointment.phoneNumber}</p>
          </div>
          <div className="d-flex align-items-center mt-4 ml-4">
            <img src={emailImg} alt="e-mail icon" />
            <p>{appointment.email}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AppointmentCard;
