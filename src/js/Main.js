// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
import Step from './main/Step.js';

export default class Main extends Component {
  render () {
		let { currentStep,
			openModal,
			stepListItems } = this.props;

		return (
			<main className="app-main">
				{stepListItems.map(item => {
						return (
							<Step stepNumber={item.stepNumber}
								stepName={item.stepName}
								subHeaderText={item.subHeaderText}
								stepContent={item.stepContent}
								isVisible={currentStep === item.stepNumber}
								openModal={openModal} />
						);
					}
				)}
			</main>
		)
	}
}