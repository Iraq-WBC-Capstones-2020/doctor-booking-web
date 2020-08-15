import React, { useState } from 'react';
import './EditProfile.css';
import Map, { Marker } from 'react-map-gl';
import avatar from './avatar.svg';
import { Form } from 'react-bootstrap';
import SideNav from '../DashboardPage/SideNav/SideNav';

const API =
  'pk.eyJ1IjoiaHVzc2VpbnRhbGFsIiwiYSI6ImNrY3M4dWxwbzFtZDIycnM2OHQ4dXM4cnIifQ.ofCZrIlVF_r4YpQDzSi13g';

function EditProfile() {
  const [viewport, setViewport] = useState({
    latitude: 36.1901,
    longitude: 43.993,
    height: '26rem',
    width: '100%',
    zoom: 10,
  });

  const [marker, setMarker] = useState([0, 0]);
  function placeMarker(e) {
    setMarker(e.lngLat);
    console.log(marker);
  }

  return (
    <div>
      <div className="row p-0 m-0 editContainer">
        <div className="sideBar  col-md-2">
          <SideNav className=" pt-5 mt-5 " />
        </div>

        <div className="col-md-10   px-4 py-4">
          {/* header  */}
          <div className="header d-flex  align-items-center">
            <div className="">
              <img src={avatar} alt="" />
            </div>
            <div className="ml-4">
              <h1>Doctor Name</h1>
              <p>Medical genetics</p>
            </div>
          </div>

          {/* form  */}
          <div className="formInfo  px-4 py-3">
            <form>
              <div className="form-row justify-content-between">
                <div className="col-md-5">
                  <label htmlFor="fullname" className="label">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    placeholder="enter your fullname"
                    required
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="specialty" className="label">
                    Specialty
                  </label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </div>
              </div>
              <div className="form-row my-5 justify-content-between">
                <div className="col-md-5 ">
                  <label htmlFor="experince" className="label">
                    Experince
                  </label>
                  <textarea
                    className="form-control"
                    id="experince"
                    rows="5"
                    placeholder="enter your experince"
                  ></textarea>
                </div>
                <div className="col-md-5 ">
                  <label htmlFor="education" className="label">
                    Education
                  </label>
                  <textarea
                    className="form-control"
                    id="education"
                    rows="5"
                    placeholder="enter your education"
                  ></textarea>
                </div>
              </div>
              <hr />
              <div className="form-row my-5 justify-content-between">
                <div className="col-md-5">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value=""
                    placeholder="enter your email"
                    required
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="phoneNumebr" className="label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumebr"
                    value=""
                    placeholder="enter your phone number"
                    required
                  />
                </div>
              </div>
              <hr />
              <div className="form-row my-5 justify-content-between">
                <div className="col-md-4  mb-3">
                  <label htmlFor="address" className="label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value="country"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="validationDefault02"
                    className="mt-3 label"
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault02"
                    value="city"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefault02" className="mt-3"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault02"
                    value="refrene point"
                    required
                  />
                </div>
              </div>
            </form>
            <div className="row p-3">
              <Map
                className="map"
                {...viewport}
                mapboxApiAccessToken={API}
                onViewportChange={(viewport) => setViewport(viewport)}
                onClick={placeMarker}
                mapStyle={'mapbox://styles/mapbox/streets-v11'}
              >
                <Marker longitude={marker[0]} latitude={marker[1]}></Marker>
              </Map>
            </div>

            {/* timetable  */}

            <div className="mt-5 timeTable">
              <p>Time Table</p>
              <div className="row m-2 shadow  rounded-1">
                <div className="col-md-4  p-3 ">
                  <p className="dayOfweek">Sunday</p>
                  <p className="dayOfweek">Monday</p>
                  <p className="dayOfweek">Tuseday</p>
                  <p className="dayOfweek">Wedensday</p>
                  <p className="dayOfweek">Thursday</p>
                  <p className="dayOfweek">Friday</p>
                  <p className="dayOfweek">Sartuday</p>
                </div>
                <div className="col-md-4  p-3 pt-4">
                  <div className="switch-container d-flex mb-4 justify-content-center">
                    <Form.Check
                      type="switch"
                      className="swicth"
                      label=""
                      id="sunday"
                    />
                  </div>
                  <div className="switch-container d-flex mb-4 justify-content-center">
                    <Form.Check
                      type="switch"
                      id="monday"
                      className=""
                      label=""
                    />
                  </div>
                  <div className="switch-container d-flex mb-4 justify-content-center">
                    <Form.Check
                      type="switch"
                      className="swicth"
                      label=""
                      id="tuseday"
                    />
                  </div>
                  <div className="switch-container d-flex mb-4 justify-content-center">
                    <Form.Check
                      type="switch"
                      id="wedensday"
                      className=""
                      label=""
                    />
                  </div>
                  <div className="switch-container d-flex mb-4 justify-content-center">
                    <Form.Check
                      type="switch"
                      className="swicth"
                      label=""
                      id="thursday"
                    />
                  </div>
                  <div className="switch-container d-flex mb-4 justify-content-center">
                    <Form.Check
                      type="switch"
                      id="friday"
                      className=""
                      label=""
                    />
                  </div>
                  <div className="switch-container d-flex mb-4 justify-content-center">
                    <Form.Check
                      type="switch"
                      id="saturday"
                      className=""
                      label=""
                    />
                  </div>
                </div>
                <div className="col-md-4  p-3">
                  <div className="d-flex justify-content-between mb-3">
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm ml-5"
                      placeholder="from"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm mr-5"
                      placeholder="to"
                    />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm ml-5"
                      placeholder="from"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm mr-5"
                      placeholder="to"
                    />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm ml-5"
                      placeholder="from"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm mr-5"
                      placeholder="to"
                    />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm ml-5"
                      placeholder="from"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm mr-5"
                      placeholder="to"
                    />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm ml-5"
                      placeholder="from"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm mr-5"
                      placeholder="to"
                    />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm ml-5"
                      placeholder="from"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm mr-5"
                      placeholder="to"
                    />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm ml-5"
                      placeholder="from"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      className="form-control w-25 form-control-sm mr-5"
                      placeholder="to"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
