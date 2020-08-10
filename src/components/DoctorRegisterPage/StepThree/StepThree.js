import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { Row, Col, Form } from 'react-bootstrap';
import TimeTable from './TimeTable';
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
function StepThree() {
  const [viewport, setViewport] = useState({
    latitude: 36.1901,
    longitude: 43.993,
    height: '50vh',
    width: '100%',
    zoom: 10,
  });
  const [marker, setMarker] = useState([0, 0]);
  function placeMarker(e) {
    setMarker(e.lngLat);
  }
  return (
    <Row className="mt-5">
      <Col md="6">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Province</Form.Label>
          <Form.Control as="select">
            <option defaultValue disabled>
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
          <Form.Control type="text" placeholder="e.g. Erbil" />
        </Form.Group>
      </Col>
      <Col md="6">
        <Form.Group>
          <Form.Label>Neighborhood</Form.Label>
          <Form.Control type="text" placeholder="e.g. Brayati" />
        </Form.Group>
      </Col>
      <Col md="6">
        <Form.Group>
          <Form.Label>Reference Point</Form.Label>
          <Form.Control type="text" placeholder="e.g. next to eye center" />
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
  );
}

export default StepThree;
