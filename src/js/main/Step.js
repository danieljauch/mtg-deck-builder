// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// JavaScript libraries and files:
import StepChoice from './StepChoice.js';

export default class Step extends Component {
  render () {
		let { stepNumber,
			stepName,
			subHeaderText,
			stepChoices,
			openModal,
			makeChoice,
			goBack,
			isVisible } = this.props;

		return (
			<section className={isVisible ? "step active" : "step"}>
				<header className="step-header">
					{stepNumber > 1 &&
						<button className="step-back-button" onClick={_ => goBack()}>
							<FontAwesome name="arrow-left" />
							<span> Back</span>
						</button>
					}
					<h2>Step #{stepNumber}: {stepName}</h2>
					<div className="sub-header">{subHeaderText}</div>
				</header>
				<div className="step-content-wrap">
					{
						stepChoices.map(step => (
							<StepChoice key={step.stepChoiceName}
								stepChoiceType={step.stepChoiceType}
								stepChoiceName={step.stepChoiceName}
								stepChoiceImage={step.stepChoiceImage}
								openModal={openModal}
								makeChoice={makeChoice} />
						))
					}
				</div>
			</section>
		);
	}
}