import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { auth } from '../../Firebase';
import { ACTIONS, DoctorContext } from '../../DoctorContext';
import { firebaseFunctions } from '../../firebaseFunctions';
function NavBar() {
  const [state, dispatch] = useContext(DoctorContext);
  const [language, setLanguage] = useState('English');
  const changeLanguage = (lng) => {
    setLanguage(lng);
  };
  const handleSignOut = () => {
    firebaseFunctions.signOut();
    dispatch({ type: ACTIONS.IS_SIGNED_IN, isSignedIn: false });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        dispatch({ type: ACTIONS.IS_SIGNED_IN, isSignedIn: true });
      }
    });
  }, []);
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
              {state.isSignedIn ? (
                <a
                  activeClassName="active-link"
                  className="nav-link"
                  onClick={handleSignOut}
                  href="/"
                >
                  Sign Out
                </a>
              ) : (
                <NavLink
                  activeClassName="active-link"
                  className="nav-link"
                  to="/signin"
                >
                  Sign in
                </NavLink>
              )}
              <NavDropdown title={language}>
                <NavDropdown.Item onClick={() => changeLanguage('English')}>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('كوردى')}>
                  كوردى
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('عربي')}>
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
