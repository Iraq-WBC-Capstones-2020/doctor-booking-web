import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Avatar from './images/avatar.png'
import './style.css'
function SearchResult() {

    return(

        <div className="SearchResult">
            <Container>
                <Row>
                    <Col>
                        <h3>Search result</h3>
                    </Col>

                    
                <hr className="solid" />
                </Row>
                <Row>
                    <Col md={4}>
                    <Card className="doctorCards" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Avatar} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <div className="specilty">
                                specilty
                            </div>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div className="theButtons">
                            <Button className="theWhite" variant="primary">More Info</Button>
                            <Button className="theBlue" variant="primary">Book now</Button>
                            
                            </div>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="doctorCards" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Avatar} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <div className="specilty">
                                specilty
                            </div>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div className="theButtons">
                            <Button className="theWhite" variant="primary">More Info</Button>
                            <Button className="theBlue" variant="primary">Book now</Button>
                            
                            </div>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="doctorCards" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Avatar} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <div className="specilty">
                                specilty
                            </div>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div className="theButtons">
                            <Button className="theWhite" variant="primary">More Info</Button>
                            <Button className="theBlue" variant="primary">Book now</Button>
                            
                            </div>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="doctorCards" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Avatar} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <div className="specilty">
                                specilty
                            </div>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div className="theButtons">
                            <Button className="theWhite" variant="primary">More Info</Button>
                            <Button className="theBlue" variant="primary">Book now</Button>
                            
                            </div>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="doctorCards" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Avatar} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <div className="specilty">
                                specilty
                            </div>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div className="theButtons">
                            <Button className="theWhite" variant="primary">More Info</Button>
                            <Button className="theBlue" variant="primary">Book now</Button>
                            
                            </div>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="doctorCards" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Avatar} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <div className="specilty">
                                specilty
                            </div>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div className="theButtons">
                            <Button className="theWhite" variant="primary">More Info</Button>
                            <Button className="theBlue" variant="primary">Book now</Button>
                            
                            </div>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
    
}

export default SearchResult