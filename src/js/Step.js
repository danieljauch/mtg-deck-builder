import { Component } from 'react';

export default class Step extends Component {
  render () {
		let { stepNumber,
			stepName,
			subHeaderText,
			stepContent } = this.props;

		return (
			<section className="step">
				<header className="step-header">
					<h2>Step #{stepNumber}: {stepName}</h2>
					<div className="sub-header">{subHeaderText}</div>
				</header>
				<div className="step-content-wrap">{stepContent}</div>
			</section>
		);
	}
}