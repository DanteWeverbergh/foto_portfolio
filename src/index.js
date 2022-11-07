import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import FirebaseContext from './Context/Firebase';
import { firebase, FieldValue } from './Libs/Firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App />
      </FirebaseContext.Provider>
    </Router>
  </React.StrictMode>
);
