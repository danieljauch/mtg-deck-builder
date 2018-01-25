// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// JavaScript libraries and files:
import AppHeader from './aside/AppHeader.js';
import AppFooter from './aside/AppFooter.js';

export default class Aside extends Component {
	render () {
		let { siteTitle,
			logoURL,
			goToStep,
			toggleMenu,
			openModal,
			menuListItems,
			version,
			creditLink } = this.props;

		return (
			<aside className="app-aside">
				<button className="btn toggle-menu-btn" onClick={toggleMenu}>
					&lt;-
					<FontAwesome name="arrow-left" />
				</button>

				<AppHeader siteTitle={siteTitle}
					logoURL={logoURL}
					goToStep={goToStep}
					menuListItems={menuListItems}
					openModal={openModal} />

				<AppFooter creditLink={creditLink}
					versionNumber={`v. ${version}`}
					openModal={openModal} />
			</aside>
		)
	}
}
