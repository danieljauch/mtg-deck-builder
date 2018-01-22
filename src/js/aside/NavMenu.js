// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// JavaScript libraries and files:
import MenuList from './MenuList.js';

export default class NavMenu extends Component {
	render () {
		let { toggleMobileMenu,
			goToStep,
			menuListItems } = this.props;

		return (
			// <nav className="menu">
			// 	<div className="mobile-menu-toggle" onClick={_ => toggleMobileMenu}>
			// 		<FontAwesome name="list" />
			// 	</div>
			// 	<div className="mobile-menu-dark-back"></div>
			// 	<ul className="menu-list">
			// 		<MenuItem stepNumber={1}
			// 			stepName="Format"
			// 			chosenInfo="Standard"
			// 			handleClick={_ => goToStep(1)} />
			// 		<MenuItem stepNumber={2}
			// 			stepName="Deck Type"
			// 			chosenInfo="Dinosaurs"
			// 			handleClick={_ => goToStep(2)} />
			// 		<MenuItem stepNumber={3}
			// 			stepName="Lands"
			// 			chosenInfo="23 chosen"
			// 			handleClick={_ => goToStep(3)} />
			// 		<MenuItem stepNumber={4}
			// 			stepName="Creatures"
			// 			chosenInfo="16 chosen"
			// 			handleClick={_ => goToStep(4)} />
			// 		<MenuItem stepNumber={5}
			// 			stepName="Spells"
			// 			chosenInfo="21 chosen"
			// 			handleClick={_ => goToStep(5)} />
			// 		<MenuItem stepNumber={6}
			// 			stepName="Print / Export"
			// 			chosenInfo=""
			// 			handleClick={_ => goToStep(6)} />
			// 	</ul>
			// </nav>

			<nav className="menu">
				<div className="mobile-menu-toggle" onClick={_ => toggleMobileMenu}>
					<FontAwesome name="list" />
				</div>
				<div className="mobile-menu-dark-back"></div>
				<MenuList menuListItems={menuListItems}
					goToStep={goToStep} />
			</nav>
		);
	}
}