import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FaqPage from './containers/FaqPage/FaqPage';
import Nav from './containers/Navbar/Navbar';

function App() {
  return (
    <div>
      <Nav />
      <FaqPage />
    </div>
  );
}

export default App;
