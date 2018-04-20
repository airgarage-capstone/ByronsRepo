import React, { Component } from 'react';
import axios from 'axios';
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
      accountType: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {

    console.log(this.state);
    event.preventDefault();

    const user = {
      first_name : this.state.firstName,
      last_name: this.state.lastName,
      username: this.state.email,
      password: this.state.password,
      accountType: this.state.accountType,
      dob: this.state.dob,
      phone : this.state.phone
    };

    axios.post('http://staging.airgara.ge/api/register/', user)
      .then(res => {
        alert('Thank you for signing up with AirGarage ' + this.state.firstName)
      })

  }

  render() {
    return (
      <div className = 'positionClasses'>
      <form onSubmit={this.handleSubmit}>

          <div className ='view'>


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
          type="text"
          value={this.state.phone}
          onChange={this.handleChange}
          name = "phone"
          className="rcorners"
          placeholder = "(xxx)xxx-xxxx"
        />
        </div>

        <div>


        <select  name="accountType" onChange={this.handleChange} >
          <option>Select Account Type </option>
          <option value="Find parking">Find Parking</option>
          <option value="List a spot">List a spot</option>
          <option value="Both">Both</option>
        </select>


        </div>

        <div>
        <button className= "button button1">
          Sign up
        </button>
        </div>
      </div>
      </form>
    </div>


    );
  }
}

export default Form;
