import React from 'react';
import { Col, Row } from 'react-bootstrap';
import avatar from './imgs/avatar.svg';
import github from './imgs/icons8-github-64.png';
import twitter from './imgs/icons8-twitter-circled-64.png';
import linkedin from './imgs/icons8-linkedin-circled-64.png';
import { useTranslation } from 'react-i18next';
function TeamMember() {
  const { t } = useTranslation(['translation', 'validation']);

  return (
    <Row>
      <Col xs="6" className="d-flex align-items-center flex-column">
        <div className="teamPhoto">
          <img className="img-fluid" src={avatar} alt="team member" />
        </div>
        <div className="social-media mt-2">
          <ul className="list-unstyled d-flex justify-content-between">
            <li className="d-inline-block">
              <a href="#!">
                <img src={github} alt="github icon" />
              </a>
            </li>
            <li className="d-inline-block">
              <a href="#!">
                <img src={twitter} alt="twitter icon" />
              </a>
            </li>
            <li className="d-inline-block">
              <a href="#!">
                <img src={linkedin} alt="linkedin icon" />
              </a>
            </li>
          </ul>
        </div>
      </Col>
      <Col xs="6" className="member-info d-flex flex-column">
        <h2 className="member-name">
          {t('validation:aboutPage.ourTeam.mem1.memName')}
        </h2>
        <p className="member-role">
          {t('validation:aboutPage.ourTeam.mem1.memRole')}
        </p>
        <p className="member-description">
          {t('validation:aboutPage.ourTeam.mem1.memDis')}
        </p>
      </Col>
    </Row>
  );
}

export default TeamMember;
