import React from 'react';
// import { Container } from 'react-bootstrap';
import './DoctorProfile.scss';
import DoctorProfilePic from './DoctorProfilePic.svg';

function DoctorProfile() {
  return (
    <div>
      {' '}
      <div className="Doctor-profile-header">
        <div className="Doctor-profile-Picture">
          <img src={DoctorProfilePic} alt="DoctorProfilePictures" />
        </div>
        <div className="Doctor-profile-Name"> Doctor Name </div>
        <button className="btn btn-primary Doctor-profile-Btn">
          {' '}
          Book an appointment
        </button>
        <address className="section-address"></address>
      </div>
      <section className="Doctor-profile-body">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-5 Medical-specialty">
                <h6 className="Medical-specialty-title">Medical specialty</h6>
                <h6 className="Medical-specialty-Timetable-title">Timetable</h6>
                <table className="table table-borderless Medical-specialty-Timetable">
                  <tbody>
                    <tr>
                      <td className="table-day">Sunday</td>
                      <td className="table-time">01:00 - 4:00</td>
                    </tr>
                    <tr>
                      <td className="table-day">Monday</td>
                      <td className="table-time">11:30 - 2:00</td>
                    </tr>
                    <tr>
                      <td className="table-day">Tusday</td>
                      <td className="table-time">11:30 - 2:00</td>
                    </tr>
                    <tr>
                      <td className="table-day">Wednesday</td>
                      <td className="table-time">11:30 - 2:00</td>
                    </tr>
                    <tr>
                      <td className="table-day">thursday</td>
                      <td className="table-time">11:30 - 2:00</td>
                    </tr>
                    <tr>
                      <td className="table-day">friday</td>
                      <td className="table-time">Close</td>
                    </tr>
                    <tr>
                      <td className="table-day">saturday</td>
                      <td className="table-time">Close</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-7 ">
                <div className="card border-light Card-description">
                  <div className="card-body ">
                    <h5 className="card-title Card-description-card-title">
                      Expreince
                    </h5>
                    <p className="card-text Card-description-card-body">
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.&quot;
                    </p>
                    <h5 className="card-title Card-description-card-title">
                      Education
                    </h5>
                    <p className="card-text Card-description-card-body">
                      &quot; Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum. &quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Doctor-profile-address">
        <div className="container-fluid">
          <div className="container">
            <h1 className="Doctor-profile-address-add">Address</h1>
            <h6 className="Doctor-profile-address-title">city ,country</h6>
            <div className="section-mab">
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container"
                style={{ height: '500px' }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0, allow: 'fullscreen', frameborder: '0' }}
                  title="mag-Google"
                ></iframe>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block Doctor-profile-address-btn"
              >
                Book an appointment{' '}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DoctorProfile;
