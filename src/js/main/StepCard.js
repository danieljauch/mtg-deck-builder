// Core Components:
import React, { Component, Fragment } from 'react';
import FontAwesome from 'react-fontawesome';

export default class StepCard extends Component {
	constructor (props) {
		super(props);

		this.state = {
			flipped: false,
			rotated: false
		}
	}

	flip = _ => {
		console.log('flipping card');
		
		this.setState({
			flipped: !this.state.flipped
		});
	}

	rotate = _ => {
		console.log('rotating card');
		
		this.setState({
			rotated: !this.state.rotated
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
				<figure className="step-card-figure">
					<img src={cardImage} alt={cardName} className={chosen ? "step-card-image chosen" : "step-card-image"} />
					{flipable &&
						<Fragment>
							<FontAwesome name="refresh"
								className={this.state.flipped ? "flipped card-flip-icon" : "card-flip-icon"}
								onClick={_ => this.flip()} />
							<img src={cardBackImage} alt={cardName} className="step-card-back-image" />
						</ Fragment>
					}
					<figcaption>
						{/* This is where the card text will be plainly laid out, with images */}
					</figcaption>
				</figure>
			</div>
		);
	}
}