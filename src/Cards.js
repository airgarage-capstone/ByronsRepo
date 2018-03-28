import React, { Component } from 'react';
import './Cards.css';
import parkspot from './parkSpot.png';
import aglogo from './airgarageLogo.png';
import PropTypes from 'prop-types';

class Cards extends React.Component {

  constructor(props) {
          super(props);
          this.state = {
              name: props.name,
              streetAddress: props.address,
              city: props.city,
              state: props.state,
              zip: props.zip,
              price: props.price,
              availability: props.availability,
              quantity: props.quantity
          };
        }

  render() {
    return (
      <div className='positionClasses'>
        <div className='cardView'>
          <img src={parkspot} className = "AG-logo" alt="aglogo"/>

          <div>
            <th>Name: </th>
          <td>{this.props.name}</td>
          </div>

          <div>
            <th>Address: </th>
          <td>{this.props.streetAddress}</td>
          </div>

          <div>
            <th>State: </th>
          <td>{this.props.city}, {this.props.state}, {this.props.zip}</td>
          </div>

          <div>
            <th>Spots Available: </th>
          <td>{this.props.quantity}</td>
          </div>

          <div>
            <th>Price per Month: </th>
          <td>${this.props.price}</td>
          </div>

          <div>
            <th>Availability: </th>
          <td>{this.props.availability ? "Available 24/7" : "Not Available 24/7"}</td>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
