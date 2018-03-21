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
    alert('Thank you for signing up with AirGarage ' + this.state.firstName);
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <img src={aglogo} className = "AG-logo" alt="aglogo" />
        <h1 className="FormTitle"> Sign Up </h1>

      <div>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
            name = "firstName"
            className="rcorners"
            placeholder = "First Name"
          />
      </div>

      <div>
        <input
          type="text"
          value={this.state.lastName}
          onChange={this.handleChange}
          name = "lastName"
          className="rcorners"
          placeholder = "Last Name"
        />
      </div>

      <div>
        <input
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          name = "email"
          className="rcorners"
          placeholder = "airgarage@example.com"
        />
      </div>

      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          name = "password"
          className="rcorners"
          placeholder = "Password"
        />
      </div>

      <div>
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

      <div>
        <input
          type="tel"
          value={this.state.phone}
          onChange={this.handleChange}
          name = "phone"
          className="rcorners"
          placeholder = "(xxx)xxx-xxxx"
        />
      </div>

      <div>
        <select profile={this.state.profile} onChange={this.handleChange}>
          <option profile="findparking">Find Parking</option>
          <option profile="listaspot">List a spot</option>
          <option profile="both">Both</option>
        </select>
        <input
          type = "hidden"
          name = "profile"
          value={this.state.profile}
        />
      </div>

      <div>
        <button className= "button button1">
          Sign up
        </button>
      </div>
    </form>

    );
  }
}

export default Form;
