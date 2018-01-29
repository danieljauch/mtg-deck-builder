// Core Components:
import React, { Component, Fragment } from 'react';
import FontAwesome from 'react-fontawesome';

export default class StepCard extends Component {
	constructor (props) {
		super(props);

		this.state = {
			flipped: false
		}
	}

	flip = _ => {
		console.log('flipping card');
		
		this.setState({
			flipped: !this.state.flipped
		});
	}

  render () {
		let { cardName,
			cardImage,
			cardBackImage,
			flipable,
			chosen } = this.props;

		return (
			<div className="step-card-wrap">
				<img src={cardImage} alt={cardName} className={chosen ? "step-card-image chosen" : "step-card-image"} />
				{flipable &&
					<Fragment>
						<FontAwesome name="refresh"
							className={this.state.flipped ? "flipped card-flip-icon" : "card-flip-icon"}
							onClick={_ => this.flip()} />
						<img src={cardBackImage} alt={cardName} className="step-card-back-image" />
					</ Fragment>
				}
			</div>
		);
	}
}