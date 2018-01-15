// Core Components:
import React, { Component } from 'react';

// JavaScript libraries and files:
import NavMenu from './nav/NavMenu.js';

export default class SiteHeader extends Component {
	render () {
		let { siteTitle,
			logoURL } = this.props;
		
		return (
			<header className="site-header">
				<h1 className="header-title">{siteTitle}</h1>
				<img src={logoURL} alt={siteTitle} className="logo" />
				<NavMenu />
			</header>
		);
	}
}