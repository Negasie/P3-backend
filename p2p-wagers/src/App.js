import React, { Component } from 'react';
import './App.css';
import AuthGateway from './AuthGateway/AuthGateway';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MainContainer from './MainContainer';



class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
    }
  }
  // login = (username) => {
  //   this.setState({
  //     logged: true,
  //     username: username
  //   })
  // }
  handleRegister = async (formData) => {
    console.log(formData);
    const response = await fetch("http://localhost:9000/users", {
      method: "POST",
      body: JSON.stringify(formData),
      credentials: 'include',
      headers: {
          "Content-Type": "application/json"
      }
    })
    const parsedResponse = await response.json();
    console.log(parsedResponse);

  };
  handleLogin = async (formData) => {
    console.log(formData)
    try {
      const loginResponse = await fetch("http://localhost:9000/users/login", {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        }
      })
      const parsedLoginResponse = await loginResponse.json();
      console.log(parsedLoginResponse, 'parsed login response' );
      if(parsedLoginResponse.status === 200){
        this.setState({
          logged: true,
          currentUser: parsedLoginResponse.data
        })
      } else {
        console.log("Jake says you screwed up dummy!")
      }

    } catch(err){
      console.log(err)
    }
  }
  render() {
    console.log(this.state)
    return (
      <BrowserRouter>
      <div className="App">
        {this.state.logged ? 
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/users" component={MainContainer} />

        </Switch>
      :
        <AuthGateway handleLogin={this.handleLogin} handleRegister = {this.handleRegister}></AuthGateway>}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;



