import React, { useState, useEffect, useContext } from 'react';
import Map, { Marker } from 'react-map-gl';
import { Row, Col, Form } from 'react-bootstrap';
import TimeTable from './TimeTable';
import { DoctorContext, ACTIONS } from '../../../DoctorContext';
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
  const [state, dispatch] = useContext(DoctorContext);
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [reference, setReference] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
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
        province: province,
        city: city,
        reference: reference,
        neighborhood: neighborhood,
        marker: marker,
      },
    });
  }, [province, city, reference, neighborhood, marker]);
  useEffect(() => {
    setCity(state.doctorInfo.city);
    setProvince(state.doctorInfo.province);
    setMarker(state.doctorInfo.marker ? state.doctorInfo.marker : [0, 0]);
    setNeighborhood(state.doctorInfo.neighborhood);
    setReference(state.doctorInfo.reference);
  }, []);
  function placeMarker(e) {
    setMarker(e.lngLat);
  }
  const handleChange = (setField, e) => {
    setField(e.target.value);
    console.log(city);
  };
  return (
    <Row className="mt-5">
      <Col md="6">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Province</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => handleChange(setProvince, e)}
            value={province}
            required
          >
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
          <Form.Control
            type="text"
            placeholder="e.g. Erbil"
            onChange={(e) => handleChange(setCity, e)}
            value={city}
            required
          />
        </Form.Group>
      </Col>
      <Col md="6">
        <Form.Group>
          <Form.Label>Neighborhood</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Brayati"
            onChange={(e) => handleChange(setNeighborhood, e)}
            value={neighborhood}
            required
          />
        </Form.Group>
      </Col>
      <Col md="6">
        <Form.Group>
          <Form.Label>Reference Point</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. next to eye center"
            onChange={(e) => handleChange(setReference, e)}
            value={reference}
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
  );
}

export default StepThree;
