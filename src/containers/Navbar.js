import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
function nav() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand>Doctor Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto justify-content-end">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Search</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>FAQ</Nav.Link>
            <Nav.Link>Sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default nav;
