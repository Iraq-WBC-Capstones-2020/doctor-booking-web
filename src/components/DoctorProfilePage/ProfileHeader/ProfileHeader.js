import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { InfoContext } from '../DoctorInfoContext';
import './style.css';
import { Link } from 'react-router-dom';

function ProfileHeader() {
  const [DocInfos] = useContext(InfoContext);

  return (
    <div className="cover container-fluid d-flex align-items-end">
      <Container className="profileCover d-flex align-items-center">
        <div className="profileImage">
          <img src={DocInfos.photo} alt="profile" />
        </div>
        <div className="profileName d-flex flex-column ml-4">
          <h2>{DocInfos.fullName}</h2>
          <Link to={`../booking/${DocInfos.id}`}>
            <Button>Book an appointment</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default ProfileHeader;
