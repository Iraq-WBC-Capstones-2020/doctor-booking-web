import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Avatar from './images/avatar.png';
import './style.css';
function SearchResult() {
  const [card] = useState([
    {
      doctorName: 'Zainab Mohammed',
      specilty: 'Emergency Medicine',
      shortAbout:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      id: 1,
    },
    {
      doctorName: 'Ali Fareed',
      specilty: 'Child Doc',
      shortAbout:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      id: 2,
    },
    {
      doctorName: 'Sabah Omar',
      specilty: 'Family Medicine',
      shortAbout:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      id: 3,
    },
    {
      doctorName: 'Sarah Marwan',
      specilty: 'Child Doc',
      shortAbout:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      id: 4,
    },
    {
      doctorName: 'Salih Murtadha',
      specilty: 'Medical Genetics',
      shortAbout:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      id: 5,
    },
    {
      doctorName: 'Shadya Naji',
      specilty: 'Child Doc',
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

        <Row className="cardsRow">
          {card.map((cards) => (
            <Col md={4} key={cards.id}>
              <Card className="doctorCards" style={{ width: '18rem' }}>
                <Card.Img className="myImgCard" variant="top" src={Avatar} />
                <Card.Body>
                  <Card.Title>{cards.doctorName}</Card.Title>
                  <div className="specilty">{cards.specilty}</div>
                  <Card.Text>{cards.shortAbout}</Card.Text>
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
      </Container>
    </div>
  );
}

export default SearchResult;
