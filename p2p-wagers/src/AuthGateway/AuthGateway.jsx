import React from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Login from './LoginForm/LoginForm';
export default class AuthGateway extends React.Component {
  constructor(props) {
    super();

  }
  render() {
    return (
            <div className="App-header" id="sports-index">
          <Login handleLogin={this.props.handleLogin}></Login>

            <RegistrationForm handleRegister={this.props.handleRegister}></RegistrationForm>

      </div>
    );
  }
}