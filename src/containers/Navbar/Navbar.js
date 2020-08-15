import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
            <NavLink
              activeClassName="active-link"
              className="nav-link"
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="active-link"
              className="nav-link"
              to="/search"
            >
              Search
            </NavLink>
            <NavLink
              activeClassName="active-link"
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeClassName="active-link"
              className="nav-link"
              to="/faq"
            >
              FAQ
            </NavLink>
            <NavLink
              activeClassName="active-link"
              className="nav-link"
              to="/signin"
            >
              Sign in
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default nav;
