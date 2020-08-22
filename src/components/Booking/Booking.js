import React, { useState } from 'react';
import './Booking.css';
import { Form, Button } from 'react-bootstrap';
import booking from './Booking.svg';
import Flatpickr from 'react-flatpickr';
import { firebaseFunctions } from '../../firebaseFunctions';

function Booking() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const formatDate = (date) => {
    const dateArray = date.split(' ');
    return (
      dateArray[0] +
      '-' +
      dateArray[1] +
      '-' +
      dateArray[2] +
      '-' +
      dateArray[3]
    );
  };

  const handleChange = (setField, e) => {
    setField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentInfo = {
      name: name,
      gender: gender,
      phoneNumber: phoneNumber,
      age: age,
      email: email,
      date: date,
      time: time,
      doctorUid: 'mU4KgBDdzFYjvKUhSxppqiCyFb02', //this should be changed to the uid that is passed by the link from search page
    };

    firebaseFunctions.bookAppointment(appointmentInfo);
  };

  return (
    <div className="container booking my-5">
      <h1 className="text-center">Set up an appointment</h1>
      <div className="row my-5 align-items-center">
        <div className="col-md-10 col-lg-6 mx-4 mx-sm-0">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                id="name"
                placeholder="Enter your name"
                onChange={(e) => handleChange(setName, e)}
              />
            </Form.Group>

            <div className="form-group form-inline ">
              <div className="custom-control custom-radio mr-4">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="custom-control-input"
                  value="female"
                  onChange={(e) => handleChange(setGender, e)}
                />
                <label className="custom-control-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  className="custom-control-input"
                  value="male"
                  onChange={(e) => handleChange(setGender, e)}
                />
                <label className="custom-control-label" htmlFor="male">
                  Male
                </label>
              </div>
            </div>

            <Form.Group controlId="age">
              <Form.Control
                type="number"
                id="age"
                placeholder="Enter your age"
                onChange={(e) => handleChange(setAge, e)}
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Control
                type="number"
                id="phoneNumber"
                placeholder="Enter your phone number"
                onChange={(e) => handleChange(setPhoneNumber, e)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter your  email address"
                onChange={(e) => handleChange(setEmail, e)}
              />
            </Form.Group>

            <Flatpickr
              className="time-input"
              placeholder="Choose a time"
              onChange={(date) => {
                setDate(formatDate(date.toString()));
              }}
            />

            <Flatpickr
              className="time-input"
              placeholder="Choose a time"
              options={{
                noCalendar: true,
                enableTime: true,
              }}
              onChange={(time) => {
                setTime(time.toString().split(' ')[4]);
              }}
            />

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
