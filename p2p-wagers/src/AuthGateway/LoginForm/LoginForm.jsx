import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleLogin(this.state);

  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }
  render(){
    return (

      <form onSubmit={this.handleSubmit}>
           <h2>Login</h2>
        Username: <input type='text' name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                    <br></br>
        Password: <input type='password' name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                    <br></br>

        <input type='submit' value="Submit" />

      </form>
      )
  }
}


export default Login;