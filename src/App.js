import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './containers/AboutPage/About';
import FaqPage from './containers/FaqPage/FaqPage';
import SignIn from './containers/SignInPage/SignIn';
import BookingPage from './containers/BookingPage/BookingPage';
import DoctorRegister from './containers/DoctorRegistration/DoctorRegistration';
import HomePage from './containers/HomePage/HomePage';
import SearchPage from './containers/SearchPage/SearchPage';
import DoctorProfilePage from './containers/DoctorProfilePage/DoctorProfilePage';
import Dashboard from './containers/DashboardPage/Dashboard';
import EditProfile from './components/DashboardPage/EditProfile/EditProfile';
import DashboardSection from './components/DashboardPage/DashboardSection/DashboardSection';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/booking/:id" component={BookingPage} />
        <Route path="/register" component={DoctorRegister} />
        <Route path="/search" component={SearchPage} />
        <Route path="/profile/:id" component={DoctorProfilePage} />
        <Route path="/edit" component={EditProfile} />
        <Route path="/calender" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
