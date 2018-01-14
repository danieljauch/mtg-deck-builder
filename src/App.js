// Core Components:
import React, { Component } from 'react';

// Stylesheets:
import './App.scss';

// Font utilities:
// https://andrewgioia.github.io/Keyrune/icons.html
// https://cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css
// https://use.fontawesome.com/bf7c42290d.js

// JavaScript libraries and files:
import MoreInfoModal from './js/modals/MoreInfoModal.js';
import SiteHeader from './js/SiteHeader.js';
import SiteFooter from './js/SiteFooter.js';
import Step from './js/Step.js';
import StepChoice from './js/step/StepChoice.js';


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
    this.goToStep = this.goToStep.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
  handleClick = _ => {
		console.log('Handling click');
    console.log(this);
  }

  render () {
    return (
      <div className="App">
        <section className="modals">
          <MoreInfoModal idName="moreInfoModal" modalTitle="More Info" modalContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi molestiae fugit quibusdam numquam perspiciatis eveniet voluptatum iste debitis ut officiis dolores quisquam, quis incidunt porro! Atque reprehenderit possimus architecto."/>
        </section>
        <SiteHeader siteTitle="MTG Deck Constructor" logoURL="" />
        <main>
          <Step stepNumber="1" stepName="Format" subHeaderText="" stepContent="Choose a format below. Hover for more information." visible={true} />
          <Step stepNumber="2" stepName="Deck Type" subHeaderText="Choose a deck archetype. Hover for more information." stepContent="" visible={false} />
          <Step stepNumber="3" stepName="Lands" subHeaderText="" stepContent="" visible={false} />
          <Step stepNumber="4" stepName="Creatures" subHeaderText="" stepContent="" visible={false} />
          <Step stepNumber="5" stepName="Spells" subHeaderText="" stepContent="" visible={false} />
          <Step stepNumber="6" stepName="Print" subHeaderText="" stepContent="" visible={false} />
        </main>
        <SiteFooter creditLink="https://danieljauch.bitbucket.io/" versionNumber="v0.2.0" />
      </div>
    );
  }
}
