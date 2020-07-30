import React from 'react';
import { Container, Card, CardGroup, Row } from 'react-bootstrap';
import Freame from './images/Frame.png';
import Freame2 from './images/Frame-1.png';
import Freame3 from './images/undraw_map_1r69 1.png';

import './style.css';

function OurServices() {
  return (
    <Container className="services-section">
      <Row>
        <div className="head">
          <h1>Our services</h1>

          <hr className="gray-line" />

          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
      </Row>

      <Row>
        <CardGroup>
          <Card className="border-0 m-4">
            <Card.Img variant="top" src={Freame} />
            <Card.Body>
              <Card.Title>Search doctor</Card.Title>
              <Card.Text>
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 m-4">
            <Card.Img variant="top" src={Freame2} />
            <Card.Body>
              <Card.Title>Details info</Card.Title>
              <Card.Text>
                Free consultation with our trusted doctors and get the best
                recomendations
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 m-4">
            <Card.Img variant="top" src={Freame3} />
            <Card.Body>
              <Card.Title>Clinic loation</Card.Title>
              <Card.Text>
                Ship of the imagination star stuff harvesting star light
                descended from astronomers finite but
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
}

export default OurServices;
