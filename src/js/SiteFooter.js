// Core Components:
import React, { Component } from 'react';

export default class SiteFooter extends Component {
	render () {
		let { creditLink,
			versionNumber } = this.props;
		
		return (
			<footer className="site-footer">
				<div className="copywrite">&copy; 2017</div>
				<div className="credit">Made by <a href={creditLink}>Daniel Jauch</a></div>
				<div className="version-info">{versionNumber}</div>
			</footer>
		);
	}
}