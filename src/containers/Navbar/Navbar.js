import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function NavBar() {
  const [language, setLanguage] = useState('English');
  const changeLanguage = (lng) => {
    setLanguage(lng);
  };
  return (
    <div>
      <Navbar
        className="shadow-sm"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <Container>
          <NavLink to="/" exact>
            <Navbar.Brand>Doctor Booking</Navbar.Brand>
          </NavLink>
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
        <NavDropdown title={language}>
          <NavDropdown.Item onClick={() => changeLanguage("English")}>
            English
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => changeLanguage("كوردى")}>
            كوردى
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => changeLanguage("عربي")}>
            عربي
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </div>
  );
}

export default NavBar;
