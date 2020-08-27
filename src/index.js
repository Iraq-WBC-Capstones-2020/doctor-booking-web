import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import DoctorInfoProvider from './DoctorContext';

import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <DoctorInfoProvider>
        <Router>
          <App />
        </Router>
      </DoctorInfoProvider>
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
