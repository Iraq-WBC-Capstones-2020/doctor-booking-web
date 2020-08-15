import React, { Fragment } from 'react'
import ProfileHeader from '../../components/DoctorProfilePage/ProfileHeader/ProfileHeader'
import TimeTable from '../../components/DoctorProfilePage/TimeTable/TimeTable'
import Informations from '../../components/DoctorProfilePage/informations/Informations'
import {InfoProvider} from '../../components/DoctorProfilePage/DoctorInfoContext'
import './style.css';
import { Container, Row } from 'react-bootstrap'


function DoctorProfilePage(){

    return(
        <InfoProvider>
        <Fragment>
        <ProfileHeader />
        <Container className="theBody">
            <Row className="bodyRow">
        <TimeTable />
        <Informations />
        </Row>
        </Container>
        </Fragment>
        </InfoProvider>
    )

}

export default DoctorProfilePage