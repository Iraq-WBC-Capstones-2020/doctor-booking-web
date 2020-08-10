import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './containers/Navbar/Navbar';
import HomePage from './containers/HomePage/HomePage';
import Footer from './containers/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './containers/AboutPage/About';
import FaqPage from './containers/FaqPage/FaqPage';
import SignIn from './containers/SignInPage/SignIn';
import BookingPage from './containers/BookingPage/BookingPage';
import DoctorRegister from './containers/DoctorRegistration/DoctorRegistration';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/booking" component={BookingPage} />
        <Route path="/register" component={DoctorRegister} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
