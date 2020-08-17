import React, { Fragment } from 'react';
import ProfileHeader from '../../components/DoctorProfilePage/ProfileHeader/ProfileHeader';
import TimeTable from '../../components/DoctorProfilePage/TimeTable/TimeTable';
import Informations from '../../components/DoctorProfilePage/informations/Informations';
import { InfoProvider } from '../../components/DoctorProfilePage/DoctorInfoContext';
import './style.css';
import { Container, Row, Button } from 'react-bootstrap';
import ClinicMap from '../../components/DoctorProfilePage/ClinicMap/ClinicMap';

function DoctorProfilePage() {
  return (
    <InfoProvider>
      <Fragment>
        <ProfileHeader />
        <Container className="theBody">
          <Row className="bodyRow">
            <TimeTable />
            <Informations />
          </Row>
          <ClinicMap />
          <Button className="bookButton mt-5">Book an appointment</Button>
        </Container>
      </Fragment>
    </InfoProvider>
  );
}

export default DoctorProfilePage;
