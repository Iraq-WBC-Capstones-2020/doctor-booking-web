import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './containers/HomePage/HomePage';
import FaqPage from './containers/FaqPage/FaqPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/faq" component={FaqPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
