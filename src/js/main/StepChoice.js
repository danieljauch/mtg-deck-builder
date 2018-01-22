// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class StepChoice extends Component {
  render () {
		let { stepChoiceType,
			stepChoiceName,
			stepChoiceImage,
			openModal } = this.props;

		return (
			<div className="step-content-wrap">
				{stepChoiceType === 'figure' &&
					<figure className="step-box">
						<img src={stepChoiceImage} alt={stepChoiceName} className="step-box-image" />
						<figcaption className="step-box-caption">
							<h3>{stepChoiceName}</h3>
							<FontAwesome name="info-circle" onClick={_ => openModal(stepChoiceName)}/>
						</figcaption>
					</figure>
				}
			</div>
		);
	}
}