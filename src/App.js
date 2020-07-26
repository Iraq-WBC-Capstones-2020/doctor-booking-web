import React from 'react';
import IntroSection from './components/IntroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <div>
      <IntroSection />
      <GetInTouch />
    </div>
  );
}

export default App;
