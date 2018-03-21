import React, { Component } from 'react';
import './Cards.css';
import parkspot from './parkSpot.png';

class Cards extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
		spotName: '',
		notes: '',
		restrictions: '',
		pricePerMonth: '',
		orgName: '',
		allowAutoBook: '',
		quantity:'',
    spotPhoto: require('./parkSpot.png')
	}
}


  render() {
  	return (
    <div className = 'positionClasses'>
      <div className = 'cardView'>
        <img src={this.state.spotPhoto} className = "AG-logo" alt="aglogo"/>
      <div>
        <th>Location: </th>
        <td>{this.state.spotName = 'Byrons spot'}</td>
      </div>

      <div>
        <th>Notes: </th>
        <td>{this.state.notes = 'Small cars only'}</td>
      </div>

      <div>
        <th>Restrictions: </th>
        <td>{this.state.restrictions = 'Weekdays only'}</td>
      </div>

      <div>
        <th>Price Per Month: </th>
        <td>{this.state.pricePerMonth = '$50'}</td>
      </div>

      <div>
        <th>Organization Name: </th>
        <td>{this.state.orgName = 'Air Garage'}</td>
      </div>

      <div>
        <th>Allow Auto Book?: </th>
        <td>{this.state.allowAutoBook = 'Yes'}</td>
      </div>

      <div>
        <th>Quantity: </th>
        <td>{this.state.quantity = '1'}</td>
      </div>
      </div>

      <div className = 'cardView'>
        <img src={this.state.spotPhoto} className = "AG-logo" alt="aglogo"/>

        <div>
          <th>Location: </th>
          <td>{this.state.spotName = 'Loraines spot'}</td>
        </div>

        <div>
          <th>Notes: </th>
          <td>{this.state.notes = 'Walking distance to school'}</td>
        </div>

        <div>
          <th>Restrictions: </th>
          <td>{this.state.restrictions = 'No Restrictions'}</td>
        </div>

        <div>
          <th>Price Per Month: </th>
          <td>{this.state.pricePerMonth = '$30'}</td>
        </div>

        <div>
          <th>Organization Name: </th>
          <td>{this.state.orgName = 'Air Garage'}</td>
        </div>

        <div>
          <th>Allow Auto Book?: </th>
          <td>{this.state.allowAutoBook = 'Yes'}</td>
        </div>

        <div>
          <th>Quantity: </th>
          <td>{this.state.quantity = '2'}</td>
        </div>
      </div>

      <div className = 'cardView'>
        <img src={this.state.spotPhoto} className = "AG-logo" alt="aglogo"/>

        <div>
          <th>Location: </th>
          <td>{this.state.spotName = 'Mikes spot'}</td>
        </div>

        <div>
          <th>Notes: </th>
          <td>{this.state.notes = 'Safe Neighborhood'}</td>
        </div>

        <div>
          <th>Restrictions: </th>
          <td>{this.state.restrictions = 'Week days only'}</td>
        </div>

        <div>
          <th>Price Per Month: </th>
          <td>{this.state.pricePerMonth = '$45'}</td>
        </div>

        <div>
          <th>Organization Name: </th>
          <td>{this.state.orgName = 'Air Garage'}</td>
        </div>

        <div>
          <th>Allow Auto Book?: </th>
          <td>{this.state.allowAutoBook = 'Yes'}</td>
        </div>

        <div>
          <th>Quantity: </th>
          <td>{this.state.quantity = '1'}</td>
        </div>
      </div>
    </div>

          );
      }
  }

export default Cards;
