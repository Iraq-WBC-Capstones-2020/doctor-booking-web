import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './containers/Navbar/Navbar';
import HomePage from './containers/HomePage/HomePage';
import Footer from './containers/Footer/Footer';

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
