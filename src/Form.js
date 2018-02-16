import React, { Component } from 'react';
import aglogo from './airgarageLogo.png';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      dob:'',
      phone:'',
      profile: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('Thank you for signing up with AirGarage ' + this.state.firstName + ' ' + this.state.lastName);
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>



        <img src={aglogo} className = "AG-logo" alt="aglogo" />
        <h1 className="FormTitle"> Sign Up </h1>



        <div className="form-group">
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
            name = "firstName"
            className="rcorners"
            placeholder = "First Name"
          />
      </div>

      <div className='form-group'>
        <input
          type="text"
          value={this.state.lastName}
          onChange={this.handleChange}
          name = "lastName"
          className="rcorners"
          placeholder = "Last Name"
        />
      </div>

      <div className='form-group'>
        <input
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          name = "email"
          className="rcorners"
          placeholder = "airgarage@example.com"
        />
      </div>

      <div className='form-group'>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          name = "password"
          className="rcorners"
          placeholder = "Password"

        />
      </div>


      <div className='form-group'>
        <input
          type="date"
          value={this.state.dob}
          onChange={this.handleChange}
          name = "dob"
          required pattern = "[0-9]{2}/[0-9]{2}/[0-9]{4}"
          className="rcorners"
          placeholder = "Date of Birth (mm/dd/yyyy)"
        />
      </div>


      <div className='form-group'>
        <select profile={this.state.profile} onChange={this.handleChange}>
          <option profile="findparking">Find Parking</option>
          <option profile="listaspot">List a Spot</option>
          <option profile="both">Both</option>
        </select>
        <input
          type = "hidden"
          name = "profile"
          value={this.state.profile}
        />
      </div>

      <div className = "form-group">
        <button className= "button button1">
          Sign up
        </button>
      </div>

    </form>

    );
  }
}

export default Form;
