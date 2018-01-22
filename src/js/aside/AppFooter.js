// Core Components:
import React, { Component } from 'react';

export default class AppFooter extends Component {
	render () {
		let { creditLink,
			versionNumber,
			copyrightYear } = this.props;

		return (
			<footer className="site-footer">
				<div className="credit">Made by <a href={creditLink} target="_blank">Daniel Jauch</a></div>
				<div>
					<span className="copywrite">&copy; {copyrightYear}</span>
					<span className="version-info">{versionNumber}</span>
				</div>
			</footer>
		);
	}
}