import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Avatar from './images/avatar1.svg'
import './style.css'


function ProfileHeader(){

    return(

        <div className="cover container-fluid d-flex align-items-end">
            <Container className="profileCover d-flex align-items-center">
                <div className="profileImage">
                    <img src={Avatar} alt="profile" />
                </div>
                <div className="profileName d-flex flex-column ml-4">
                    <h2>
                        Doctor Name
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