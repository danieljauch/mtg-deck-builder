// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { APP_VERSION } from '../package.json';

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
      modalOpen: false,
      currentlyOpenModal: '',
      currentStep: 1,
      chosenFormat: '',
      chosenDeckArchetype: '',
      chosenLands: [],
      chosenCreatures: [],
      chosenSpells: [],
      allChosenCards: []
    }

    this.menuListItems = [
      {stepNumber: "1", stepName: "Format", chosenInfo: ""},
      {stepNumber: "2", stepName: "Deck Type", chosenInfo: ""},
      {stepNumber: "3", stepName: "Lands", chosenInfo: ""},
      {stepNumber: "4", stepName: "Creatures", chosenInfo: ""},
      {stepNumber: "5", stepName: "Spells", chosenInfo: ""},
      {stepNumber: "6", stepName: "Print / Export", chosenInfo: ""}
    ];

    this.modalListInfo = [
      {modalTitle:"", modalContent:(
        <div className="modal-content">
        </div>
      )}
    ];
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
	openModal = modalName => {
		console.log(`Opening modal ${modalName}`);

    this.setState({
      modalOpen: true,
      currentlyOpenModal: modalName
    });
    console.log(this.state);
  }
	closeModals = _ => {
		console.log('Toggling modal');

    this.setState({
      modalOpen: false,
      currentlyOpenModal: ''
    });
    console.log(this.state);
  }

  render () {
    return (
      <div className="app">
        <Modals modalListInfo={this.modalListInfo}
          currentlyOpenModal={this.state.currentlyOpenModal}
          closeModals={this.closeModals} />

        <Aside siteTitle="MTG Deck Builder"
          logoURL=""
          goToStep={this.goToStep}
          toggleMobileMenu={this.toggleMobileMenu}
          openModal={this.openModal}
          menuListItems={this.menuListItems}
          version={APP_VERSION} />
        
        <Main currentStep={this.state.currentStep}
          openModal={this.openModal} />
      </div>
    );
  }
}
