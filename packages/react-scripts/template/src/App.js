import React, { Component } from 'react';
import * as moment from 'moment';
import * as d3 from 'd3';
import reactLogo from './images/react.svg';
import logo from './images/logo.svg';
import './css/app.css';
import GridDemo from './js/components/GridDemo/GridDemo';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img src={reactLogo} className="app-logo" alt="logo" />
        <GridDemo />
      </div>
    );
  }
}

export default App;
