// Core Components:
import React, { Component } from 'react';

// Stylesheets:
import './css/font-awesome.min.css';
import './css/keyrune.min.css';
import './App.scss';

// Image assets
import standardFormatImage from './img/format/standard.jpg';
import modernFormatImage from './img/format/modern.jpg';
import legacyFormatImage from './img/format/legacy.jpg';
import vintageFormatImage from './img/format/vintage.jpg';
import commanderFormatImage from './img/format/commander.jpg';
import pauperFormatImage from './img/format/pauper.jpg';
// import peasantFormatImage from './img/format/peasant.jpg';
import conspiracyFormatImage from './img/format/conspiracy.jpg';
import silverBorderFormatImage from './img/format/silver-border.jpg';

// JavaScript libraries and files:
import { version } from '../package.json';
import Modals from './js/Modals.js';
import Aside from './js/Aside.js';
import Main from './js/Main.js';
import CardSearch from './js/CardSearch.js';

let cs = new CardSearch();

export default class App extends Component {
  constructor (props) {
    super(props);

    // Basic application details
    this.appTitle = 'MTG Deck Builder';
    // this.logoURL = '';
    this.creditLink = 'https://danieljauch.bitbucket.io/';

    // App state
    this.state = {
      error: false,
      mobileMenuVisible: false,
      asideOpen: window.innerWidth >= 1280,
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
      {
        modalTitle: 'Format',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Deck Type',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Lands',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Creatures',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Spells',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Print / Export',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      },
      
      // Format modals
      {
        modalTitle: 'Standard',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Modern',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Legacy',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Vintage',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Commander',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Conspiracy',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Pauper',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Peasant',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Silver Border',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      },
      
      // Deck archetype modals
      {
        modalTitle: 'Reanimator',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Dredge',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Mill',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Tribal',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Control',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Burn',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Ramp',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Taxes',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Growth',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      },
      
      // Color modals
      {
        modalTitle: 'White',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Blue',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Black',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Red',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Green',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      },
      
      // Land topic modals
      {
        modalTitle: 'Mana curve',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      }, {
        modalTitle: 'Land ratio',
        modalContent: (
          <div className="modal-content">
          </div>
        )
      },

      // App modals
      {
        modalTitle: 'Changelog',
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
        )
      }
    ];

    // Menu items
    this.menuListItems = [
      {
        stepNumber: 1,
        stepName: 'Format',
        chosenInfo: ''
      }, {
        stepNumber: 2,
        stepName: 'Deck Type',
        chosenInfo: ''
      }, {
        stepNumber: 3,
        stepName: 'Lands',
        chosenInfo: []
      }, {
        stepNumber: 4,
        stepName: 'Creatures',
        chosenInfo: []
      }, {
        stepNumber: 5,
        stepName: 'Spells',
        chosenInfo: []
      }, {
        stepNumber: 6,
        stepName: 'Print / Export'
      }
    ];

    this.stepListItems = [
      {
        stepNumber: 1, 
        stepName: 'Format', 
        subHeaderText: '', 
        stepChoices: [
          {
            stepChoiceType: 'figure',
            stepChoiceName: 'Standard',
            stepChoiceImage: standardFormatImage,
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Modern',
            stepChoiceImage: modernFormatImage,
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Legacy',
            stepChoiceImage: legacyFormatImage,
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Vintage',
            stepChoiceImage: vintageFormatImage,
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Commander',
            stepChoiceImage: commanderFormatImage,
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Conspiracy',
            stepChoiceImage: conspiracyFormatImage,
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Pauper',
            stepChoiceImage: pauperFormatImage,
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Peasant',
            stepChoiceImage: '',
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Silver Border',
            stepChoiceImage: silverBorderFormatImage,
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }
        ]
      }, {
        stepNumber: 2,
        stepName: 'Deck Type',
        subHeaderText: '',
        stepChoices: [
          {
            stepChoiceType: 'figure',
            stepChoiceName: 'Reanimator',
            stepChoiceImage: '',
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Dredge',
            stepChoiceImage: '',
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Mill',
            stepChoiceImage: '',
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Tribal',
            stepChoiceImage: '',
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Control',
            stepChoiceImage: '',
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Burn',
            stepChoiceImage: '',
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Ramp',
            stepChoiceImage: '',
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Taxes',
            stepChoiceImage: '',
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }, {
            stepChoiceType: 'figure',
            stepChoiceName: 'Growth',
            stepChoiceImage: '',
            openModal: this.openModal,
            makeChoice: this.makeChoice
          }
        ]
      }, {
        stepNumber: 3,
        stepName: 'Lands',
        subHeaderText: '',
        stepChoices: []
      }, {
        stepNumber: 4, 
        stepName: 'Creatures', 
        subHeaderText: '', 
        stepChoices: []
      }, {
        stepNumber: 5, 
        stepName: 'Spells', 
        subHeaderText: '', 
        stepChoices: []
      }, {
        stepNumber: 6, 
        stepName: 'Print / Export', 
        subHeaderText: '', 
        stepChoices: []
      }
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
        this.menuListItems[1].chosenInfo = choice;
        this.setState({
          currentStep: 3,
          chosenDeckArchetype: choice
        });
        break;

      case 3:
        console.log("Choice made on step 3");
        this.menuListItems[2].chosenInfo = choice;
        this.setState({
          currentStep: 4,
          chosenLands: choice
        });
        break;

      case 4:
        console.log("Choice made on step 4");
        this.menuListItems[3].chosenInfo = choice;
        this.setState({
          currentStep: 5,
          chosenCreatures: choice
        });
        break;

      case 5:
        console.log("Choice made on step 5");
        this.menuListItems[4].chosenInfo = choice;
        this.setState({
          currentStep: 6,
          chosenSpells: choice
        });
        break;

      default: // 1
        console.log("Choice made on step 1");
        this.menuListItems[0].chosenInfo = choice;
        this.setState({
          currentStep: 2,
          chosenFormat: choice
        });
    }
    console.log(this.state);
  }
  goBack = _ => {
		console.log('Going back');
    this.setState({
      currentStep: this.state.currentStep - 1
    });
    console.log(this.state);
  }
	toggleAside = _ => {
		console.log('Toggling aside');
    this.setState({
      asideOpen: !this.state.asideOpen
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
          isOpen={this.state.asideOpen}
          // logoURL={this.logoURL}
          goToStep={this.goToStep}
          toggleAside={this.toggleAside}
          openModal={this.openModal}
          menuListItems={this.menuListItems}
          version={version}
          creditLink={this.creditLink} />
          
        <Main currentStep={this.state.currentStep}
          stepListItems={this.stepListItems}
          openModal={this.openModal}
          makeChoice={this.makeChoice}
          goBack={this.goBack} />
      </div>
    );
  }
}
