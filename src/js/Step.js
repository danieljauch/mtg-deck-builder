import React, { Component } from 'react';
import StepChoice from './step/StepChoice.js';

export default class Step extends Component {
  render () {
		let { stepNumber,
			stepName,
			subHeaderText,
			stepContent,
			visible } = this.props;
		let classes = visible ? 'step active' : 'step';

		return (
			<section className={classes}>
				<header className="step-header">
					<h2>Step #{stepNumber}: {stepName}</h2>
					<div className="sub-header">{subHeaderText}</div>
				</header>
				<StepChoice />
			</section>
		);
	}
}