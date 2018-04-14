import React, { Component } from 'react';
import aglogo from './airgarageLogo.png';
import './App.css';
import Form from './Form';
import LogIn from './LogIn';
import Cards from './Cards';
import axios from 'axios';

class App extends Component {

render() {
  return (
    <div>
        <Form></Form>
        <LogIn></LogIn>
        </div>
  );
}
}

export default App;
