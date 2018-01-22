// Core Components:
import React, { Component } from 'react';

// Stylesheets:
import './App.scss';

// Font utilities:
// https://andrewgioia.github.io/Keyrune/icons.html
// https://cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css
// https://use.fontawesome.com/bf7c42290d.js

// JavaScript libraries and files:
import { version } from '../package.json';
import Modals from './js/Modals.js';
import Aside from './js/Aside.js';
import Main from './js/Main.js';

export default class App extends Component {
  constructor (props) {
    super(props);

    // Basic application details
    this.appTitle = 'MTG Deck Builder';
    this.logoURL = '';
    this.creditLink = 'https://danieljauch.bitbucket.io/';
    this.copyrightYear = '2018';

    // App state
    this.state = {
      error: false,
      mobileMenuVisible: false,
      menuOpen: false,
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

    // Modal information
    this.modalListInfo = [
      {modalTitle: '',
        modalContent: (
          <div className="modal-content">
          </div>
        )}
    ];

    // Menu items
    this.menuListItems = [
      {stepNumber: 1,
        stepName: 'Format',
        chosenInfo: ''},
      {stepNumber: 2,
        stepName: 'Deck Type',
        chosenInfo: ''},
      {stepNumber: 3,
        stepName: 'Lands',
        chosenInfo: ''},
      {stepNumber: 4,
        stepName: 'Creatures',
        chosenInfo: ''},
      {stepNumber: 5,
        stepName: 'Spells',
        chosenInfo: ''},
      {stepNumber: 6,
        stepName: 'Print / Export',
        chosenInfo: ''}
    ];

    // Steps
    this.stepListItems = [
      {stepNumber: 1, 
        stepName: 'Format', 
        subHeaderText: '', 
        stepContent: (
          <div className="step-content">
          </div>
        )},
      {stepNumber: 2, 
        stepName: 'Deck Type', 
        subHeaderText: '', 
        stepContent: (
          <div className="step-content">
          </div>
        )},
      {stepNumber: 3, 
        stepName: 'Lands', 
        subHeaderText: '', 
        stepContent: (
          <div className="step-content">
          </div>
        )},
      {stepNumber: 4, 
        stepName: 'Creatures', 
        subHeaderText: '', 
        stepContent: (
          <div className="step-content">
          </div>
        )},
      {stepNumber: 5, 
        stepName: 'Spells', 
        subHeaderText: '', 
        stepContent: (
          <div className="step-content">
          </div>
        )},
      {stepNumber: 6, 
        stepName: 'Print / Export', 
        subHeaderText: '', 
        stepContent: (
          <div className="step-content">
          </div>
        )}
    ];
  }

	goToStep = stepNumber => {
    this.setState({
      currentStep: stepNumber
    });
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
        console.log("Choice made on step 1");
        this.setState({
          currentStep: 2,
          chosenFormat: choice
        });
    }
    console.log(this.state);
  }
	toggleMenu = _ => {
		console.log('Toggling menu');
    this.setState({
      menuOpen: !this.state.menuOpen
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
          
        <Aside siteTitle={this.appTitle}
          logoURL={this.logoURL}
          goToStep={this.goToStep}
          toggleMobileMenu={this.toggleMenu}
          openModal={this.openModal}
          menuListItems={this.menuListItems}
          version={version}
          creditLink={this.creditLink}
          copyrightYear={this.copyrightYear} />
          
        <Main currentStep={this.state.currentStep}
          stepListItems={this.stepListItems}
          openModal={this.openModal} />
      </div>
    );
  }
}
