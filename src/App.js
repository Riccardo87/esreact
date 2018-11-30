import React, { Component } from 'react';

import './css/App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './components/about/About.js';
import Home from './components/home/Home.js';
import Contact from './components/contact/Contact.js';


class App extends Component {
  render() {
    return (

  <Router>

<div className="menu">
    <nav>
        <li>
            <Link to='/'> Home </Link>
        </li>
        <li>
            <Link to='/contact/'> Contact </Link>
        </li>
        <li>
            <Link to='/about/'> About </Link>
        </li>
    </nav>

      <Route patch='/' exact Component={Home} />
      <Route patch='/about/' Component={About} />
      <Route patch='/contact/' Component={Contact} />

  </div>

</Router>

    )
  }
}

export default App;
