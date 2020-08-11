import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import personImg from './imgs/person.svg';
import clockImg from './imgs/clock.svg';
import phoneImg from './imgs/phone.svg';
import emailImg from './imgs/email.svg';
function AppointmentCard() {
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
          <img src={clockImg} />
          <p>15 March 2018 - 5:00 - 6:00 pm</p>
        </div>
        <div className="d-flex align-items-center pt-3 pl-3">
          <img src={personImg} />
          <p>John Doe Jabbar</p>
        </div>
      </div>

      <Modal className="modal-container" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ml-4">Appointment information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-4 d-flex flex-column">
          <div className="d-flex align-items-center mt-3 ml-4">
            <img src={clockImg} />
            <p>15 March 2018 - 5:00 - 6:00 pm</p>
          </div>
          <div className="d-flex align-items-center mt-4 ml-4">
            <img src={personImg} />
            <p>John Doe Jabbar</p>
          </div>
          <div className="d-flex align-items-center mt-4 ml-4">
            <img src={phoneImg} />
            <p>+9647701234567</p>
          </div>
          <div className="d-flex align-items-center mt-4 ml-4">
            <img src={emailImg} />
            <p>someone@somewhere.com</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AppointmentCard;
