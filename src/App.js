// Core Components:
import React, { Component } from 'react';

// Stylesheets:
import './App.scss';

// Font utilities:
// https://fonts.googleapis.com/css?family=Merriweather:300,400,700
// https://andrewgioia.github.io/Keyrune/icons.html
// https://cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css
// https://use.fontawesome.com/bf7c42290d.js

// JavaScript libraries and files:
import MoreInfoModal from './js/modals/MoreInfoModal.js';
import SiteHeader from './js/SiteHeader.js';
import SiteFooter from './js/SiteFooter.js';
import Step from './js/Step.js';


export default class App extends Component {
  state = {
    error: false,
    currentStep: 1
  }
	goToStep = stepNumber => {
		console.log('Going to step', stepNumber);
		return true;
	}
	toggleMobileMenu = _ => {
		console.log('Toggling mobile menu');
		return true;
	}
  reportStateChange = _ => {
    console.log(this.state);
  }

  render () {
    return (
      <div className="App">
        <section className="modals">
          <MoreInfoModal idName="moreInfoModal" modalTitle="More Info" modalContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi molestiae fugit quibusdam numquam perspiciatis eveniet voluptatum iste debitis ut officiis dolores quisquam, quis incidunt porro! Atque reprehenderit possimus architecto."/>
        </section>
        <SiteHeader siteTitle="MTG Deck Constructor" logoURL="" />
        <main>
          <Step stepNumber="1" stepName="Format" subHeaderText="" stepContent="Choose a format below. Hover for more information." />
          <Step stepNumber="2" stepName="Deck Type" subHeaderText="Choose a deck archetype. Hover for more information." stepContent="" />
          <Step stepNumber="3" stepName="Lands" subHeaderText="" stepContent="" />
          <Step stepNumber="4" stepName="Creatures" subHeaderText="" stepContent="" />
          <Step stepNumber="5" stepName="Spells" subHeaderText="" stepContent="" />
          <Step stepNumber="6" stepName="Print" subHeaderText="" stepContent="" />
        </main>
        <SiteFooter creditLink="https://danieljauch.bitbucket.io/" versionNumber="v0.2.0" />
      </div>
    );
  }
}
