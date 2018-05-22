import React, { Component } from 'react';
import * as moment from 'moment';
import * as d3 from 'd3';
import logo from './images/logo.svg';
import './css/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img src={logo} className="app-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
