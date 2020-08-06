import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import BookingPag e from './containers/BookingPage/BookingPage';

function App() {
  return (
    <div>
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
