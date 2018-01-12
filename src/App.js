import React, { Component } from 'react';
import './style.css';
import Event from './js/Event.js';
import Modals from './js/Modal.js';
import SiteHeader from './js/SiteHeader.js';
import SiteFooter from './js/SiteFooter.js';
import Step from './js/Step.js';

export default class App extends Component {
  state = {
    error: false,
    currentStep: 1
  }
  reportStateChange = _ => {
    console.log(this.state);
  }

  render () {
    return (
      <div className="App">
        <Modals />
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
