import React, { useState, useEffect, useContext } from 'react';
import Map, { Marker } from 'react-map-gl';
import { Row, Col, Form, Button } from 'react-bootstrap';
import TimeTable from './TimeTable';
import { DoctorContext, ACTIONS } from '../../../DoctorContext';
import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';

const API =
  'pk.eyJ1IjoiaHVzc2VpbnRhbGFsIiwiYSI6ImNrY3M4dWxwbzFtZDIycnM2OHQ4dXM4cnIifQ.ofCZrIlVF_r4YpQDzSi13g';
const provinces = [
  'Al Anbar',
  'Babil',
  'Baghdad',
  'Basra',
  'Dhi Qar',
  'Al-Qadisiyyah',
  'Diyala',
  'Duhok',
  'Erbil',
  'Halabja',
  'Karbala',
  'Kirkuk',
  'Maysan',
  'Muthanna',
  'Najaf',
  'Nineveh',
  'Salahaddin',
  'Sulaymaniyah',
  'Wasit',
];
function StepThree({ handleBackStep }) {
  StepThree.propTypes = {
    handleBackStep: propTypes.func,
  };
  const { handleSubmit, register } = useForm();
  const [state, dispatch] = useContext(DoctorContext);
  const onSubmit = (values) => {
    dispatch({
      type: ACTIONS.ADD_DOCTOR,
      doctorInfo: { ...values, ...state.doctorInfo, marker: marker },
    });

    console.log(state.doctorInfo);
  };

  const [viewport, setViewport] = useState({
    latitude: 36.1901,
    longitude: 43.993,
    height: '50vh',
    width: '100%',
    zoom: 10,
  });
  const [marker, setMarker] = useState([0, 0]);

  useEffect(() => {
    dispatch({
      type: ACTIONS.ADD_DOCTOR,
      doctorInfo: {
        ...state.doctorInfo,
        marker: marker,
      },
    });
  }, [marker]);

  function placeMarker(e) {
    setMarker(e.lngLat);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mt-5">
        <Col md="6">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Province</Form.Label>
            <Form.Control
              name="province"
              as="select"
              value={state.doctorInfo.province}
              ref={register({
                required: true,
              })}
              required
            >
              <option disabled selected>
                Select a province
              </option>
              {provinces.map((province) => {
                return <option key={province}>{province}</option>;
              })}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              type="text"
              placeholder="e.g. Erbil"
              value={state.doctorInfo.city}
              ref={register({
                required: true,
              })}
              required
            />
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group>
            <Form.Label>Neighborhood</Form.Label>
            <Form.Control
              type="text"
              name="neighborhood"
              placeholder="e.g. Brayati"
              value={state.doctorInfo.neighborhood}
              ref={register({
                required: true,
              })}
              required
            />
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group>
            <Form.Label>Reference Point</Form.Label>
            <Form.Control
              type="text"
              name="reference"
              placeholder="e.g. next to eye center"
              value={state.doctorInfo.reference}
              ref={register({
                required: true,
              })}
              required
            />
          </Form.Group>
        </Col>
        <Col className="mt-5" xs="12">
          <p>Zoom in and click on the location of your clinic</p>
          <Map
            {...viewport}
            mapboxApiAccessToken={API}
            onViewportChange={(viewport) => setViewport(viewport)}
            onClick={placeMarker}
            mapStyle={'mapbox://styles/mapbox/streets-v11'}
          >
            <Marker longitude={marker[0]} latitude={marker[1]}></Marker>
          </Map>
        </Col>
        <Col xs={12} className="time-table">
          <p>Switch on the working days and choose the working times</p>
          <TimeTable className="w-100" />
        </Col>
      </Row>
      <Button type="button" onClick={handleBackStep}>
        Back
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default StepThree;
