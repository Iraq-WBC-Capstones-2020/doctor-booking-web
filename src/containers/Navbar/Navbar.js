import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import i18n from '../../i18n'
function NavBar() {
  
  const [language, setLanguage] = useState('English');
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    setLanguage(lng);
      
  
  };
  if(language == 'ar'){
    const p = document.getElementsByTagName('p')
    const myPar = Array.from(p)
    myPar.map( pp => pp.style.textAlign = 'right')
  }
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
            <Navbar.Brand>DOCTOR BOOKING</Navbar.Brand>
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
              <NavDropdown title={language}>
                <NavDropdown.Item onClick={() => changeLanguage('en')}>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('كوردى')}>
                  كوردى
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('ar')}>
                  عربي
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
