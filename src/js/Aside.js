// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// JavaScript libraries and files:
import AppHeader from './aside/AppHeader.js';
import NavMenu from './aside/NavMenu.js';
import AppFooter from './aside/AppFooter.js';

export default class Aside extends Component {
	render () {
		let { siteTitle,
			isOpen,
			// logoURL,
			goToStep,
			toggleAside,
			openModal,
			menuListItems,
			version,
			creditLink } = this.props;

		return (
			<aside className={isOpen ? "open app-aside" : "app-aside"}>
				<button className="btn toggle-menu-btn" onClick={_ => toggleAside()}>
					<FontAwesome name="times" />
				</button>

				<AppHeader siteTitle={siteTitle} />
				
				<NavMenu goToStep={goToStep}
					menuListItems={menuListItems}
					openModal={openModal} />

				<AppFooter creditLink={creditLink}
					versionNumber={`v. ${version}`}
					openModal={openModal} />
			</aside>
		)
	}
}
