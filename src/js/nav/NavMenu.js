// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// JavaScript libraries and files:
import MenuItem from './MenuItem.js';
import App from '../../App.js';

const menuListItems = [
	{stepNumber: "1", stepName: "Format", chosenInfo: ""},
	{stepNumber: "2", stepName: "Deck Type", chosenInfo: ""},
	{stepNumber: "3", stepName: "Lands", chosenInfo: ""},
	{stepNumber: "4", stepName: "Creatures", chosenInfo: ""},
	{stepNumber: "5", stepName: "Spells", chosenInfo: ""},
	{stepNumber: "6", stepName: "Print / Export", chosenInfo: ""}
];

class MenuList extends Component {
	render () {
		let { list,
			handleClick } = this.props;
	
		return (
			<ul className="menu-list">
				{list.map(item => {
						return (
							<MenuItem stepNumber={item.stepNumber}
								stepName={item.stepName}
								chosenInfo={item.chosenInfo}
								handleClick={handleClick} />
						);
					}
				)}
			</ul>
		)
	}
}

const NavMenu = _ => (
	<nav className="menu">
		<div className="mobile-menu-toggle" onClick={App.toggleMobileMenu}>
			<FontAwesome name="list" />
		</div>
		<div className="mobile-menu-dark-back"></div>
		<MenuList list={menuListItems} handleClick={this.handleClick} />
	</nav>
);

export default NavMenu;