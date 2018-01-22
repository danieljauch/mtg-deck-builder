// Core Components:
import React, { Component } from 'react';

export default class AppFooter extends Component {
	render () {
		let { creditLink,
			versionNumber } = this.props;

		return (
			<footer className="site-footer">
				<div className="credit">Made by <a href={creditLink}>Daniel Jauch</a></div>
				<div>
					<span className="copywrite">&copy; 2018</span>
					<span className="version-info">{versionNumber}</span>
				</div>
			</footer>
		);
	}
}