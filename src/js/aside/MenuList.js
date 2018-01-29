// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
import MenuItem from './MenuItem.js';

export default class MenuList extends Component {
	render () {
		let { menuListItems,
			goToStep,
			openModal } = this.props;

		return (
			<ul className="menu-list">
				{
					menuListItems.map(menuItem => (
						<MenuItem key={menuItem.stepNumber}
							stepNumber={menuItem.stepNumber}
							stepName={menuItem.stepName}
							chosenInfo={menuItem.chosenInfo}
							goToStep={goToStep}
							openModal={openModal} />
					))
				}
			</ul>
		)
	}
}