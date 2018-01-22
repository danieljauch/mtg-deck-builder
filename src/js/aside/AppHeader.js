// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
import NavMenu from './NavMenu.js';

export default class AppHeader extends Component {
	render () {
		let { siteTitle,
			logoURL,
			goToStep,
			menuListItems,
			openModal } = this.props;

		return (
			<header className="app-header">
				<h1 className="header-title">{siteTitle}</h1>
				<img src={logoURL} alt={siteTitle} className="logo" />
				
				<NavMenu goToStep={goToStep}
					menuListItems={menuListItems}
					openModal={openModal} />
			</header>
		);
	}
}