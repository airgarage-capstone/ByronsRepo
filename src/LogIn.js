import React, { Component } from 'react';
import aglogo from './airgarageLogo.png';
import axios from 'axios';
import './LogIn.css';

class LogIn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){

    console.log(this.state);
    event.preventDefault();

    const user = {
			username: this.state.email,
			password: this.state.password
		}

		axios.post('http://staging.airgara.ge/api/auth/', user)
		.then(res => {
				alert('Welcome Back')
			})
  }

  render()
  {
    return(
      <div className = 'positionClasses'>
      <form onSubmit = {this.handleSubmit}>

        <div className = 'views'>
        <h1 className="FormTitle"> Log In </h1>


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
          <button className= "button button1">
            Log In
          </button>
          </div>

        </div>
        </form>
        </div>


    );
  }
}

export default LogIn;
