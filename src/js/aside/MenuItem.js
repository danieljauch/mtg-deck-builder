// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class MenuItem extends Component {
	render () {
		let { stepNumber,
			stepName,
			chosenInfo,
			goToStep,
			openModal } = this.props;

		return (
			<li className="menu-item" onClick={_ => goToStep(stepNumber)}>
				<div>
					<span className="step-number">#{stepNumber}: </span>
					<span className="step-type">{stepName}</span>
				</div>

				<button className="more-info-btn">
					<FontAwesome name="info-circle" onClick={_ => openModal(stepName)}/>
				</button>

				<div className="chosen-info">{chosenInfo}</div>
			</li>
		);
	}
}