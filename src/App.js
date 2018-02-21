import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">AirGarage</h1>
        <LogIn></LogIn>
      </div>
    );
  }
}

export default App;
