// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
import MenuItem from './MenuItem.js';

export default class MenuList extends Component {
	render () {
		let { menuListItems,
			goToStep } = this.props;

		return (
			<ul className="menu-list">
				{menuListItems.map(item => {
						return (
							<MenuItem stepNumber={item.stepNumber}
								stepName={item.stepName}
								chosenInfo={item.chosenInfo}
								goToStep={_ => goToStep(item.stepNumber)} />
						);
					}
				)}
			</ul>
		)
	}
}