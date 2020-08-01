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
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/SearchPage">
              Search
            </Link>
            <Link className="nav-link" to="/AboutPage">
              About
            </Link>
            <Link className="nav-link" to="/FAQPage">
              FAQ
            </Link>
            <Link className="nav-link" to="/SignInPage">
              Sign in
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default nav;
