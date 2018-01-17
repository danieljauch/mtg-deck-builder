// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
// import StepChoice from './step/StepChoice.js';

export default class Step extends Component {
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