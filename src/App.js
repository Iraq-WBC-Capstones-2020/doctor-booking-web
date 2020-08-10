import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './containers/Navbar/Navbar';
import HomePage from './containers/HomePage/HomePage';
import Footer from './containers/Footer/Footer';
import DoctorRegistration from './containers/DoctorRegistration/DoctorRegistration';

function App() {
  return (
    <div>
      <Nav />
      <HomePage />
      <DoctorRegistration />
      <Footer />
    </div>
  );
}

export default App;
