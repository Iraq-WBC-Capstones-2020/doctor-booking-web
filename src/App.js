import React from 'react';
import Nav from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import OurTeam from './components/AboutPage/OurTeam';

function App() {
  return (
    <div>
      <Nav />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default App;
