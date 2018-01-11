import React, { Component } from 'react';
import loginModal from './js/LoginModal.js';
import './style.css';

class App extends Component {
  state = {
    loggedIn: false,
    loginModalOpen: false
  }
  loginSubmit = _ => {
    this.setState({
      loginModalOpen: false
    });
    this.reportStateChange();

    return this.loginSuccess;
  }
  loginModalOpen = _ => {
    this.setState({
      loginModalOpen: true
    });
    this.reportStateChange();
  }
  loginSuccess = _ => {
    this.setState({
      loggedIn: true
    });
    this.reportStateChange();
  }
  reportStateChange = _ => {
    console.log(this.state);
  }

  render () {
    return (
      <div className="App">
        <div className="modals">
          {this.state.loginModalOpen &&
            <loginModal />
          }
        </div>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.loginModalOpen}>Log in</button>
        </header>
      </div>
    );
  }
}

export default App;
