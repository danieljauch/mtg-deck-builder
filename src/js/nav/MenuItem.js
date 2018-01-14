import React, { Component } from 'react';

export default class MenuItem extends Component {
	render () {
		let { stepNumber,
			stepName,
			chosenInfo,
			handleClick } = this.props;

		return (
			<li className="menu-item" onClick={handleClick}>
				<span className="step-number">#{stepNumber}: </span>
				<span className="step-type">{stepName}</span>
				<div className="chosen-info">{chosenInfo}</div>
			</li>
		);
	}
}