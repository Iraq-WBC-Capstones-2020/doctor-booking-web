import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './containers/HomePage/HomePage';
import Nav from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './containers/AboutPage/About';
function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/AboutPage" component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
