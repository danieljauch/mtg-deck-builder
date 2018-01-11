import React, { Component } from 'react';
import inputField from 'InputField.js';

class LoginModal extends Component {
  render () {
    return (
      <section className="modal login-modal">
        <form className="login-form">
          <div className="login-component">
            <label htmlFor="un">User name</label>
            <inputField inputType="text" id="un" />
          </div>
          <div className="login-component">
            <label htmlFor="pw">Password</label>
            <inputField inputType="password" id="pw" />
          </div>
          <button className="login-submit-button btn" onClick={this.loginSubmit}>Log in</button>
        </form>
      </section>
    );
  }
}

export default LoginModal;
