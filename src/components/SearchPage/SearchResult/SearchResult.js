import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
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
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
    
}

export default SearchResult