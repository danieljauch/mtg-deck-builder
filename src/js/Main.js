// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
import Step from './main/Step.js';
import CardSearch from './main/CardSearch.js';

let cs = new CardSearch();

cs.cardSearch({
  types: "Land",
  legalities: {
    format: "Standard",
    legality: "Legal"
  }
});

export default class Main extends Component {
  render () {
		let { currentStep,
			openModal,
			makeChoice,
			goBack,
			stepListItems } = this.props;

		return (
			<main className="app-main">
				{stepListItems.map(step => {
						return (
							<Step key={step.stepNumber}
								stepNumber={step.stepNumber}
								stepName={step.stepName}
								subHeaderText={step.subHeaderText}
								stepType={step.stepType}
								stepChoices={step.stepChoices}
								cardQuery={step.cardQuery}
								isVisible={currentStep === step.stepNumber}
								openModal={openModal}
								makeChoice={makeChoice}
								goBack={goBack} />
						);
					}
				)}
			</main>
		)
	}
}