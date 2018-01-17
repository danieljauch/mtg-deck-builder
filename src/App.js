// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Stylesheets:
import './App.scss';

// Font utilities:
// https://andrewgioia.github.io/Keyrune/icons.html
// https://cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css
// https://use.fontawesome.com/bf7c42290d.js

// JavaScript libraries and files:
import Modals from './js/Modals.js';
import Aside from './js/Aside.js';
import Main from './js/Main.js';


export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      error: false,
      mobileMenuVisible: false,
      mobileMenuOpen: false,
      currentStep: 1,
      chosenFormat: '',
      chosenDeckArchetype: '',
      chosenLands: [],
      chosenCreatures: [],
      chosenSpells: [],
      allChosenCards: []
    }
  }

	goToStep = stepNumber => {
    console.log('Going to step', stepNumber);

    this.setState({
      currentStep: stepNumber
    });
    console.log(this.state);
  }
  makeChoice = choice => {
    switch (this.state.currentStep) {
      case 2:
        console.log("Choice made on step 2");
        this.setState({
          currentStep: 3,
          chosenDeckArchetype: choice
        });
        break;
        
      case 3:
        console.log("Choice made on step 3");
        this.setState({
          currentStep: 4,
          chosenLands: choice
        });
        break;
      
      case 4:
        console.log("Choice made on step 4");
        this.setState({
          currentStep: 5,
          chosenCreatures: choice
        });
        break;
        
      case 5:
        console.log("Choice made on step 5");
        this.setState({
          currentStep: 6,
          chosenSpells: choice
        });
        break;

      default: // 1
        this.setState({
          currentStep: 2,
          chosenFormat: choice
        });
        console.log("Choice made on step 1");
    }
    console.log(this.state);
  }
	toggleMobileMenu = _ => {
		console.log('Toggling mobile menu');

    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    });
    console.log(this.state);
  }

  render () {
    return (
      <div className="app">
        <Modals />
        <Aside goToStep={this.goToStep} toggleMobileMenu={this.toggleMobileMenu} />
        <Main currentStep={this.state.currentStep} />
      </div>
    );
  }
}
