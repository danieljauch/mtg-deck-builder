// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
import Step from './main/Step.js';

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
								stepChoices={step.stepChoices}
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