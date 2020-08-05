import React from 'react';
import './Booking.css';
import { Form, Button } from 'react-bootstrap';
import booking from './Booking.svg';

function Booking() {
  return (
    <div className="container booking my-5">
      <h1 className="text-center">Set up and appoinment </h1>
      <div className="row my-5 align-items-center">
        <div className="col-md-6">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="enter your name" />
            </Form.Group>

            <div className="form-group form-inline ">
              <div className="custom-control custom-radio mr-4">
                <input
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="customRadio1">
                  Female
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio2"
                  name="customRadio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="customRadio2">
                  Male
                </label>
              </div>
            </div>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="enter your age" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter your phone number"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter your  email address"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Set Appoinment
            </Button>
            <Button variant="outline-danger">Cancle appoinment</Button>
          </Form>
        </div>
        <div className="col-md-6">
          <img src={booking} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Booking;
