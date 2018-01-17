// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
import App from '../App.js';

export default class Main extends Component {
  render () {
		let { currentStep } = this.props;

		return (
			<main className="app-main">
				<Step stepNumber={1}
					stepName="Format"
					subHeaderText="Choose a format below. Hover for more information."
					stepContent=""
					visible={currentStep === 1 ? true : false} />
				<Step stepNumber={2}
					stepName="Deck Type"
					subHeaderText="Choose a deck archetype. Hover for more information."
					stepContent=""
					visible={currentStep === 2 ? true : false} />
				<Step stepNumber={3}
					stepName="Lands"
					subHeaderText=""
					stepContent=""
					visible={currentStep === 3 ? true : false} />
				<Step stepNumber={4}
					stepName="Creatures"
					subHeaderText=""
					stepContent=""
					visible={currentStep === 4 ? true : false} />
				<Step stepNumber={5}
					stepName="Spells"
					subHeaderText=""
					stepContent=""
					visible={currentStep === 5 ? true : false} />
				<Step stepNumber={6}
					stepName="Print"
					subHeaderText=""
					stepContent=""
					visible={currentStep === 6 ? true : false} />
			</main>
		)
	}
}

class Step extends Component {
  render () {
		let { stepNumber,
			stepName,
			subHeaderText,
			stepContent,
			visible } = this.props;

		return (
			<section className={visible ? "step active" : "step"}>
				<header className="step-header">
					<h2>Step #{stepNumber}: {stepName}</h2>
					<div className="sub-header">{subHeaderText}</div>
				</header>
				{stepContent}
				{/* <StepChoiceList choices={StepChoice} /> */}
			</section>
		);
	}
}

// class StepChoiceList extends Component {
// 	listChoices = choices.map(choices => {
// 		<StepChoice />
// 	});

//   render () {
// 		return (
// 			{listChoices}
// 		);
// 	}
// }


class StepChoice extends Component {
  render () {
		let { stepChoiceType,
			stepChoiceName,
			stepChoiceImage } = this.props;

		return (
			<div className="step-content-wrap">
				{stepChoiceType === 'figure' &&
					<figure className="step-box">
						<img src={stepChoiceImage} alt={stepChoiceName} className="step-box-image" />
						<figcaption className="step-box-caption">
							<h3>{stepChoiceName}</h3>
							<i className="fa fa-info-circle more-info-icon" aria-hidden="true"></i>
						</figcaption>
					</figure>
				}
			</div>
		);
	}
}