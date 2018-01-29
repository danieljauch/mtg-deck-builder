// Core Components:
import React, { Component } from 'react';

export default class AppHeader extends Component {
	render () {
		let { siteTitle } = this.props;

		return (
			<header className="app-header">
				<h1 className="header-title">{siteTitle}</h1>
			</header>
		);
	}
}