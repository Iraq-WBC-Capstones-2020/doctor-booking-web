import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { Row, Col, Form } from 'react-bootstrap';

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
    mapStyle:'mapbox://styles/mapbox/streets-v11',
    latitude: 36.1901,
    longitude: 43.993,
    height: '50vh',
    width: '100%',
    zoom: 10,
  });
  const [marker, setMarker] = useState([0, 0]);
  function handleClick(e) {
    console.log(e.lngLat);
    setMarker(e.lngLat);
    console.log(marker);
  }
  return (
    <Row>
      <Col md="6">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Province</Form.Label>
          <Form.Control as="select">
            <option selected disabled>
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
      <Col xs="12">
        <Map
          {...viewport}
          mapboxApiAccessToken={API}
          onViewportChange={(viewport) => setViewport(viewport)}
          onClick={handleClick}
          mapStyle={'mapbox://styles/mapbox/streets-v11'}
        >
          <Marker longitude={marker[0]} latitude={marker[1]}></Marker>
        </Map>
      </Col>
    </Row>
  );
}

export default StepThree;
