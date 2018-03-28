import React, { Component } from 'react';
import aglogo from './airgarageLogo.png';
import './App.css';
import Form from './Form';
import LogIn from './LogIn';
import Cards from './Cards';
import axios from 'axios';

class App extends Component {
  state = {
      spots: []
  }
  componentDidMount() {
      axios.get(`https://airgara.ge/api/spots/`)
        .then(res => {
          const spots = res.data;
          this.setState({ spots });
        })
  }

render() {
  return (
    <div className="App">
      <h1 class="App-title">AirGarage</h1>

      <h2 className = "positionClasses">{ this.state.spots.map(spot => <Cards

          name={spot.name}
          streetAddress={spot.address.address_line1}
          city={spot.address.city}
          state={spot.address.state}
          zip={spot.address.zipcode}
          quantity={spot.quantity}
          price={spot.price}
          availability={spot.available_24_7}

          />)}</h2>
    </div>
  );
}
}

export default App;
