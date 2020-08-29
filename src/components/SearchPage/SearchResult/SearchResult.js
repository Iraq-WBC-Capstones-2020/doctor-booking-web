import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Avatar from './images/avatar.png';
import './style.css';
import { DoctorContext } from '../../../DoctorContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SearchResult({ filterDoctors }) {
  const [state] = useContext(DoctorContext);

  SearchResult.propTypes = {
    filterDoctors: PropTypes.array,
  };

  return (
    <div className="searchResult">
      <Container>
        <Row>
          <Col>
            {filterDoctors?.length === 0 ? (
              <h2 className="text-primary">Doctor List</h2>
            ) : (
              <h2 className="text-success">Search result</h2>
            )}
          </Col>
          <hr className="solid" />
        </Row>

        {filterDoctors?.length === 0 ? (
          <Row className="cardsRow">
            {state.doctors.map((doctor, index) => (
              <Col md={4} key={index}>
                <Card className="doctorCards " style={{ width: '18rem' }}>
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
                      <Link to={`profile/${doctor.uid}`}>
                        <Button className="theWhite" variant="primary">
                          More Info
                        </Button>
                      </Link>
                      <Link to={`booking/${doctor.uid}`}>
                        <Button className="theBlue" variant="primary">
                          Book now
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Row className="cardsRow">
            {filterDoctors?.map((doctor, index) => (
              <Col md={4} key={index}>
                <Card className="doctorCards " style={{ width: '18rem' }}>
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
                      <Link to={`profile/${doctor.uid}`}>
                        <Button className="theWhite" variant="primary">
                          More Info
                        </Button>
                      </Link>
                      <Link to={`booking/${doctor.uid}`}>
                        <Button className="theBlue" variant="primary">
                          Book now
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default SearchResult;
