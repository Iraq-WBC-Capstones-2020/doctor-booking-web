import React, { useState } from 'react';
import './Booking.css';
import { Form, Button } from 'react-bootstrap';
import booking from './Booking.svg';
import Flatpickr from 'react-flatpickr';
import { firebaseFunctions } from '../../firebaseFunctions';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

function Booking() {
  const { handleSubmit, register } = useForm();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const { id } = useParams();
  const onSubmit = (values) => {
    const appointmentInfo = { ...values };
    if (date !== '' && time !== '') {
      Object.assign(appointmentInfo, {
        date: date,
        time: time,
        doctorUid: id,
      });
      firebaseFunctions.bookAppointment(appointmentInfo);
    } else {
      alert('Enter the date and time');
    }
  };

  const formatDate = (date) => {
    const dateArray = date.split(' ');
    return (
      dateArray[0] +
      ' ' +
      dateArray[1] +
      ' ' +
      dateArray[2] +
      ' ' +
      dateArray[3]
    );
  };

  return (
    <div className="container booking my-5">
      <h1 className="text-center">Set up an appointment</h1>
      <div className="row my-5 align-items-center">
        <div className="col-md-10 col-lg-6 mx-4 mx-sm-0">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                    message: 'name invalid',
                  },
                })}
                required
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
                  ref={register({
                    required: true,
                  })}
                  required
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
                  ref={register({
                    required: true,
                  })}
                  required
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
                name="age"
                placeholder="Enter your age"
                ref={register({
                  required: true,
                })}
                required
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Control
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="ex: 0770-000-0000"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[(]{0,1}[0-9]{4}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/,
                    message: 'invalid phone number',
                  },
                })}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control
                type="email"
                id="email"
                name="email"
                placeholder="Enter your  email address"
                ref={register({
                  required: true,
                })}
                required
              />
            </Form.Group>

            <Flatpickr
              className="time-input"
              placeholder="Choose a date"
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
