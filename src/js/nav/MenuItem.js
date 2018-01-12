import { Component } from 'react';

export default class MenuItem extends Component {
	render () {
		let { stepNumber,
			stepName,
			chosenInfo } = this.props;

		return (
			<li className="menu-item" onClick={App.goToStep(stepNumber)}>
				<span className="step-number">#{stepNumber}: </span>
				<span className="step-type">{stepName}</span>
				<div className="chosen-info"></div>
			</li>
		);
	}
}