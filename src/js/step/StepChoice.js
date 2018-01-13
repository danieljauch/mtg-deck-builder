import React, { Component } from 'react';

export default class StepChoice extends Component {
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