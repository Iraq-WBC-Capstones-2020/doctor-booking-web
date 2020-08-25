import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
function NavBar() {
  const {t, i18n} = useTranslation('validation')
  const [language, setLanguage] = useState();

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18next.fallbackLng = [lng]

    i18n.changeLanguage(lng);
    console.log(i18next.fallBackLng)

      
  
  };
  if(i18next.fallBackLng == 'ar'){
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
          <Navbar.Brand>{t('navBar.logo')}</Navbar.Brand>
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
              <NavLink
                activeClassName="active-link"
                className="nav-link"
                to="/signin"
              >
                {t('navBar.links.signIn')}
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
