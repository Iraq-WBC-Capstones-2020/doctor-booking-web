import React from 'react'
import { Container } from 'react-bootstrap'


function ProfileHeader(){

    return(

        <div className="container-fluid">
            <Container>
                <div className="profileImage">
                    <img src="" alt="" />
                </div>
                <div className="profileName">
                    <h2>
                        Doctor Name
                    </h2>
                </div>
                <div className="bookButton">
                    <Button>

                    </Button>
                </div>
            </Container>
        </div>

    )

}

export default ProfileHeader