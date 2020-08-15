import React, { useContext, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import {InfoContext} from '../DoctorInfoContext'
import './style.css'


function ProfileHeader(){
const [DocInfos,setDocInfos] = useContext(InfoContext)
    return(

        <div className="cover container-fluid d-flex align-items-end">
            <Container className="profileCover d-flex align-items-center">
                <div className="profileImage">
                    <img src={DocInfos.photo} alt="profile" />
                </div>
                <div className="profileName d-flex flex-column ml-4">
                    <h2>
                        {DocInfos.fullName}
                    </h2>
                    <Button>
                        Book an appointment
                    </Button>
                </div>
                
            </Container>

            
        </div>

    )

}

export default ProfileHeader