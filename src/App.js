import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import BookingPage from './containers/BookingPage/BookingPage';

function App() {
  return (
    <div>
      <Nav />
      <BookingPage />
      <Footer />
    </div>
  );
}

export default App;
