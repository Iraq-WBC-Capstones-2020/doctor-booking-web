import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Avatar from './images/avatar.png';
import './style.css';
function SearchResult({ filterDoctors }) {
  console.log(filterDoctors);

  const [card] = useState([
    {
      doctorName: 'Salah Mohammed',
      specilty: 'Emergency medicine',
      shortAbout:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      id: 1,
    },
    {
      doctorName: 'Salah Mohammed',
      specilty: 'child Doc',
      shortAbout:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      id: 2,
    },
    {
      doctorName: 'Sabah Mohammed',
      specilty: 'Family medicine',
      shortAbout:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      id: 3,
    },
    {
      doctorName: 'Salah Ahmed',
      specilty: 'child Doc',
      shortAbout:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      id: 4,
    },
    {
      doctorName: 'Salih Mohammed',
      specilty: 'Medical genetics',
      shortAbout:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      id: 5,
    },
    {
      doctorName: 'Salah Naji',
      specilty: 'child Doc',
      shortAbout:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      id: 6,
    },
  ]);

  return (
    <div className="searchResult">
      <Container>
        <Row>
          <Col>
            <h3>Search result</h3>
          </Col>

          <hr className="solid" />
        </Row>

        {filterDoctors ? (
          <Row className="cardsRow">
            {filterDoctors.map((doctor, index) => (
              <Col md={4} key={index}>
                <Card className="doctorCards" style={{ width: '18rem' }}>
                  <Card.Img className="myImgCard" variant="top" src={Avatar} />
                  <Card.Body>
                    <Card.Title>{doctor.name}</Card.Title>
                    <div className="specilty">{doctor.speciality}</div>
                    <Card.Text>
                      {' '}
                      Lorem, ipsum dolor amet consectetur adipisicing elit.
                      Provident, totam?{' '}
                    </Card.Text>
                    <div className="theButtons">
                      <Button className="theWhite" variant="primary">
                        More Info
                      </Button>
                      <Button className="theBlue" variant="primary">
                        Book now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <h1>No Result found</h1>
        )}
      </Container>
    </div>
  );
}

export default SearchResult;
