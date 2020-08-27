import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { auth } from '../../Firebase';
import { ACTIONS, DoctorContext } from '../../DoctorContext';
import { firebaseFunctions } from '../../firebaseFunctions';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
function NavBar() {
  const { t, i18n } = useTranslation(['validation', 'common']);

  const [state, dispatch] = useContext(DoctorContext);
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'));
  const changeLanguage = (lng) => {
    setLanguage(lng);

    i18n.changeLanguage(lng);
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
                {t('navBar.links.home')}
              </NavLink>
              <NavLink
                activeClassName="active-link"
                className="nav-link"
                to="/search"
              >
                {t('navBar.links.search')}
              </NavLink>
              <NavLink
                activeClassName="active-link"
                className="nav-link"
                to="/about"
              >
                {t('navBar.links.about')}
              </NavLink>
              <NavLink
                activeClassName="active-link"
                className="nav-link"
                to="/faq"
              >
                {t('navBar.links.FAQ')}
              </NavLink>
              {state.isSignedIn ? (
                <a
                  activeClassName="active-link"
                  className="nav-link"
                  onClick={handleSignOut}
                  href="/"
                >
                  {t('common:signOut')}
                </a>
              ) : (
                <NavLink
                  activeClassName="active-link"
                  className="nav-link"
                  to="/signin"
                >
                  {t('common:signIn')}
                </NavLink>
              )}
              <NavDropdown title={language}>
                <NavDropdown.Item onClick={() => changeLanguage('en')}>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('kr')}>
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
