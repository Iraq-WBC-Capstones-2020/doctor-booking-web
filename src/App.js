import React from 'react';
import IntroSection from './components/IntroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container>
        <IntroSection />
      </Container>
    </div>
  );
}

export default App;
