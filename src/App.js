import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import LogIn from './LogIn';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <h1 class="App-title">AirGarage</h1>
        <Cards></Cards>

    </div>
    );
  }
}

export default App;
