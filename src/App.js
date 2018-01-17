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
import MoreInfoModal from './js/modals/MoreInfoModal.js';
import MenuItem from './js/nav/MenuItem.js';
import SiteFooter from './js/SiteFooter.js';
import Step from './js/Step.js';
// import StepChoice from './js/step/StepChoice.js';


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
	toggleMobileMenu = _ => {
		console.log('Toggling mobile menu');

    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    });
    console.log(this.state);
  }

  render () {
    return (
      <div className="App">
        <section className="modals">
          <MoreInfoModal idName="moreInfoModal" 
            modalTitle="More Info" 
            modalContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi molestiae fugit quibusdam numquam perspiciatis eveniet voluptatum iste debitis ut officiis dolores quisquam, quis incidunt porro! Atque reprehenderit possimus architecto."/>
        </section>
        <header className="site-header">
          <h1 className="header-title">MTG Deck Constructor</h1>
          <nav className="menu">
            <div className="mobile-menu-toggle" onClick={App.toggleMobileMenu}>
              <FontAwesome name="list" />
            </div>
            <div className="mobile-menu-dark-back"></div>
            <ul className="menu-list">
              <MenuItem stepNumber={1}
                stepName="Format"
                chosenInfo=""
                handleClick={_ => this.goToStep(1)} />
              <MenuItem stepNumber={2}
                stepName="Deck Type"
                chosenInfo=""
                handleClick={_ => this.goToStep(2)} />
              <MenuItem stepNumber={3}
                stepName="Lands"
                chosenInfo=""
                handleClick={_ => this.goToStep(3)} />
              <MenuItem stepNumber={4}
                stepName="Creatures"
                chosenInfo=""
                handleClick={_ => this.goToStep(4)} />
              <MenuItem stepNumber={5}
                stepName="Spells"
                chosenInfo=""
                handleClick={_ => this.goToStep(5)} />
              <MenuItem stepNumber={6}
                stepName="Print / Export"
                chosenInfo=""
                handleClick={_ => this.goToStep(6)} />
            </ul>
          </nav>
        </header>
        <main>
          <Step stepNumber={1}
            stepName="Format"
            subHeaderText="Choose a format below. Hover for more information."
            stepContent=""
            visible={this.state.currentStep === 1 ? true : false} />
          <Step stepNumber={2}
            stepName="Deck Type"
            subHeaderText="Choose a deck archetype. Hover for more information."
            stepContent=""
            visible={this.state.currentStep === 2 ? true : false} />
          <Step stepNumber={3}
            stepName="Lands"
            subHeaderText=""
            stepContent=""
            visible={this.state.currentStep === 3 ? true : false} />
          <Step stepNumber={4}
            stepName="Creatures"
            subHeaderText=""
            stepContent=""
            visible={this.state.currentStep === 4 ? true : false} />
          <Step stepNumber={5}
            stepName="Spells"
            subHeaderText=""
            stepContent=""
            visible={this.state.currentStep === 5 ? true : false} />
          <Step stepNumber={6}
            stepName="Print"
            subHeaderText=""
            stepContent=""
            visible={this.state.currentStep === 6 ? true : false} />
        </main>
        <SiteFooter creditLink="https://danieljauch.bitbucket.io/"
          versionNumber="v0.2.0" />
      </div>
    );
  }
}
