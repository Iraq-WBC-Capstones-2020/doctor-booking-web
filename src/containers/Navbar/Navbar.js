import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function nav() {
  return (
    <Navbar
      className="shadow-sm mainNav"
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
            <Link className="nav-link" to="/search">
              Search
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/faq">
              FAQ
            </Link>
            <Link className="nav-link" to="/signin">
              Sign in
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default nav;
