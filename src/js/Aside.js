// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// JavaScript libraries and files:
import App from '../App.js';
import AppHeader from './aside/AppHeader.js';
import AppFooter from './aside/AppFooter.js';

export default class Aside extends Component {
	render () {
		let { siteTitle,
			logoURL,
			goToStep,
			toggleMobileMenu,
			openModal,
			menuListItems,
		 	version } = this.props;

		return (
			<aside className="app-aside">
				<AppHeader siteTitle={siteTitle}
					logoURL={logoURL}
					toggleMobileMenu={toggleMobileMenu}
					goToStep={goToStep}
					menuListItems={menuListItems} />
				<div className="aside-colapse-button">
					<FontAwesome name="arrow-left" />
				</div>
				<AppFooter creditLink="https://danieljauch.bitbucket.io/"
					versionNumber={`v. ${version}`} />
			</aside>
		)
	}
}
