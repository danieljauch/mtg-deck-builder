// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
import StepChoice from './StepChoice.js';

export default class Step extends Component {
  render () {
		let { stepNumber,
			stepName,
			subHeaderText,
			stepContent,
			openModal,
			isVisible } = this.props;

		return (
			<section className={isVisible ? "step active" : "step"}>
				<header className="step-header">
					<h2>Step #{stepNumber}: {stepName}</h2>
					<div className="sub-header">{subHeaderText}</div>
				</header>
				{stepContent}
				{/* <StepChoiceList choices={StepChoice} openModal={openModal} /> */}
			</section>
		);
	}
}