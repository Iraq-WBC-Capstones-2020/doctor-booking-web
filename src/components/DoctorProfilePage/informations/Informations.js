import React, { useContext } from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import {InfoContext} from '../DoctorInfoContext'

import './style.css'

function Informations() {

    const [TheInfo,setInfo] = useContext(InfoContext)

    return(
        
        <div>
            <Row>
                <Col lg={8}>
                    <div className="informations">
                        <div className="informationsCards education">
                        <Card className="infCards" border="light" style={{ width: '45rem' }}>
    <Card.Body>
      <Card.Title>Education</Card.Title>
      <Card.Text className="cardText">
      {TheInfo.educaton}
      </Card.Text>
    </Card.Body>
  </Card>
                        </div>
                        <div className="informationsCards experinces">
                        <Card className="infCards" border="light" style={{ width: '45rem' }}>
    <Card.Body>
      <Card.Title>Experinces</Card.Title>
      <Card.Text className="cardText">
      {TheInfo.experinces}
      </Card.Text>
    </Card.Body>
  </Card>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    )
    
}

export default Informations