// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
import Step from './main/Step.js';

export default class Main extends Component {
  render () {
		let { currentStep,
			openModal,
			makeChoice,
			stepListItems } = this.props;

		return (
			<main className="app-main">
				{stepListItems.map(item => {
						return (
							<Step stepNumber={item.stepNumber}
								stepName={item.stepName}
								subHeaderText={item.subHeaderText}
								stepChoices={item.stepChoices}
								isVisible={currentStep === item.stepNumber}
								openModal={openModal}
								makeChoice={makeChoice} />
						);
					}
				)}
			</main>
		)
	}
}