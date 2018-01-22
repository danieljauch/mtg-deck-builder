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
      // Step label modals
      {modalTitle: 'Format',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Deck Type',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Lands',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Creatures',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Spells',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Print / Export',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      
      // Format modals
      {modalTitle: 'Standard',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Modern',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Legacy',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Vintage',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Commander',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Conspiracy',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Pauper',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Peasant',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Silver Border Allowed',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      
      // Deck archetype modals
      {modalTitle: 'Reanimator',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Dredge',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Mill',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Tribal',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Control',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Burn',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Ramp',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Taxes',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Growth',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      
      // Color modals
      {modalTitle: 'White',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Blue',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Black',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Red',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Green',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      
      // Land topic modals
      {modalTitle: 'Mana curve',
        modalContent: (
          <div className="modal-content">
          </div>
        )},
      {modalTitle: 'Land ratio',
        modalContent: (
          <div className="modal-content">
          </div>
        )},

      // App modals
      {modalTitle: 'Changelog',
        modalContent: (
          <div className="modal-content">
            <section className="change-version-section">
              <header className="change-version-number">
                <h3>v. 0.1.0</h3>
              </header>
              <ul className="changes-list">
                <li className="change-item">Initial design</li>
                <li className="change-item">Prototype content</li>
              </ul>
            </section>
            <section className="change-version-section">
              <header className="change-version-number">
                <h3>v. 0.2.0</h3>
              </header>
              <ul className="changes-list">
                <li className="change-item">Migration to React</li>
                <li className="change-item">Testing states and component layout</li>
              </ul>
            </section>
            <section className="change-version-section">
              <header className="change-version-number">
                <h3>v. 0.3.0</h3>
              </header>
              <ul className="changes-list">
                <li className="change-item">Redesign</li>
              </ul>
            </section>
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
		console.log('Closing modals');
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
