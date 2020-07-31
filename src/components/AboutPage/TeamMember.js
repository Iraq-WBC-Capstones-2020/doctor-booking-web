import React from 'react';
import { Col, Row } from 'react-bootstrap';
import avatar from './imgs/avatar.svg';
import facebook from './imgs/facebook.svg';
import instagram from './imgs/instagram.svg';
import github from './imgs/github.svg';
function TeamMember() {
  return (
    <Row>
      <Col xs="6" className="d-flex align-items-center flex-column">
        <div>
          <img className="img-fluid" src={avatar} />
        </div>
        <div className="social-media mt-2">
          <ul className="list-unstyled d-flex justify-content-between">
            <li className="d-inline-block">
              <a href="#">
                <img src={github} />
              </a>
            </li>
            <li className="d-inline-block">
              <a href="#">
                <img src={facebook} />
              </a>
            </li>
            <li className="d-inline-block">
              <a href="#">
                <img src={instagram} />
              </a>
            </li>
          </ul>
        </div>
      </Col>
      <Col xs="6" className="member-info d-flex flex-column">
        <h2 className="member-name">John Doe</h2>
        <p className="member-role">Member Role</p>
        <p className="member-description">
          some description here about the person and here is more text just for
          test
        </p>
      </Col>
    </Row>
  );
}

export default TeamMember;
