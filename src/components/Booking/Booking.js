import React from 'react';
import './Booking.css';
import { Form, Button } from 'react-bootstrap';
import booking from './Booking.svg';

function Booking() {
  return (
    <div className="container booking my-5">
      <h1 className="text-center">Set up and appoinment </h1>
      <div className="row my-5 align-items-center">
        <div className="col-md-10 col-lg-6 mx-4 mx-sm-0">
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="enter your name"
              />
            </Form.Group>

            <div className="form-group form-inline ">
              <div className="custom-control custom-radio mr-4">
                <input
                  type="radio"
                  id="female"
                  name="customRadio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="male"
                  name="customRadio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="male">
                  Male
                </label>
              </div>
            </div>

            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                id="age"
                placeholder="enter your age"
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                id="phoneNumber"
                placeholder="enter your phone number"
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="enter your  email address"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Set Appoinment
            </Button>
          </Form>
        </div>
        <div className=" d-none d-lg-block col-lg-6 ">
          <img src={booking} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Booking;
