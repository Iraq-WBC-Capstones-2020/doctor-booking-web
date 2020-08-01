import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import videoFrame from './images/Video.png'
import style from './style.css'

function VideoSection() {

    return(

        <Container className="VideoSection">
            <Row>
                <div className="col-lg-6">
                
                    <h1>To get more familiar <br/>
                        with the website<br/>
                        watch this video<br/>
                    </h1>
                </div>
                
           
                <div className="col-lg-6">
                    <div className="videoFrame">
                    <img  src={videoFrame}/>
                    </div>
                </div>
                
            </Row>
        </Container>

    )
    
}
export default VideoSection