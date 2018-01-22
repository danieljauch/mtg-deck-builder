// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
import MenuList from './MenuList.js';

export default class NavMenu extends Component {
	render () {
		let { goToStep,
			menuListItems,
			openModal } = this.props;

		return (
			<nav className="menu">
				<div className="mobile-menu-dark-back"></div>
				
				<MenuList menuListItems={menuListItems}
					goToStep={goToStep}
					openModal={openModal} />
			</nav>
		);
	}
}