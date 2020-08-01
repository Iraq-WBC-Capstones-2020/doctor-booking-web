import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function nav() {
  return (
    <Navbar
      className="shadow-sm"
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
    >
      <Container>
        <Navbar.Brand>Doctor Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto justify-content-end">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/SearchPage">Search</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/AboutPage">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/FAQPage">FAQ</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/SignInPage">Sign in</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default nav;
