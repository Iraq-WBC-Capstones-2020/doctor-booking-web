import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './containers/HomePage/HomePage';
import Nav from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import HomePage from './containers/HomePage/HomePage';


function App() {
  return (
    <div>
      <HomePage />
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
