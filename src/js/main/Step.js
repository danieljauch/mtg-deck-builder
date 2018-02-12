// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// JavaScript libraries and files:
import StepChoice from './StepChoice.js';
import CardSearch from './CardSearch.js';

export default class Step extends Component {
	constructor (props) {
		super(props);
	}

	generateCardQuery = (_format, deckType, _stepName, _colors = []) => {
		let ret = {};

		if (_stepName == "Lands") {
			ret[type] = "Land";
		} else if (_stepName == "Creatures") {
			ret[type] = "Creature";
		} else if (_stepName == "Spells") {
			ret[types] = ["Enchantment", "Artifact", "Planeswalker", "Sorcery", "Instant"];
		}

		ret[legalities] = {
			format: _format,
			legality: "Legal"
		}
		
		if (_colors != [])
			ret[colors] = _colors;

		return ret;
	}

  render () {
		let { stepNumber,
			stepName,
			subHeaderText,
			stepType,
			stepChoices,
			// cardQuery,
			openModal,
			makeChoice,
			goBack,
			isVisible } = this.props;

		if (isVisible && stepType == "cardlist") {
			let cardQuery = this.generateCardQuery(App.instance.state.chosenFormat,
					App.instance.state.chosenDeckArchetype,
					App.instance.state.currentStep);
		}

		return (
			<section className={isVisible ? "step active" : "step"}>
				<header className="step-header">
					{stepNumber > 1 &&
						<button className="step-back-button" onClick={_ => goBack()}>
							<FontAwesome name="arrow-left" />
							<span> Back</span>
						</button>
					}
					<h2>Step #{stepNumber}: {stepName}</h2>
					<div className="sub-header">{subHeaderText}</div>
				</header>
				<div className="step-content-wrap">
					{stepType == "choices" &&
						stepChoices.map(step => (
							<StepChoice key={step.stepChoiceName}
								stepChoiceType={step.stepChoiceType}
								stepChoiceName={step.stepChoiceName}
								stepChoiceImage={step.stepChoiceImage}
								openModal={openModal}
								makeChoice={makeChoice} />
						))
					}
					{stepType == "cardlist" &&
						<CardSearch cardQuery={cardQuery} />
					}
					{stepType == "print" &&
						<div>
							{/* This is where the print dialog will go */}
						</div>
					}
				</div>
			</section>
		);
	}
}