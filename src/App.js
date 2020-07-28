import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './containers/HomePage/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
