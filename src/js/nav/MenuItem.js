import React, { Component } from 'react';
// import App from '../../App.js';

export default class MenuItem extends Component {
	render () {
		let { stepNumber,
			stepName,
			chosenInfo } = this.props;

		return (
			<li className="menu-item">
				<span className="step-number">#{stepNumber}: </span>
				<span className="step-type">{stepName}</span>
				<div className="chosen-info">{chosenInfo}</div>
			</li>
		);
	}
}

// onClick={App.goToStep(stepNumber)}