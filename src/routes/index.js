// Components/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from 'routes/Main';
import About from 'routes/About';

export default () => (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Route path="/" component={Main} exact />
    <Route path="/About" component={About} />
  </Router>
);
