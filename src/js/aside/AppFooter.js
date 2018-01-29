// Core Components:
import React, { Component } from 'react';

export default class AppFooter extends Component {
	render () {
		let { creditLink,
			versionNumber,
			openModal } = this.props;

		return (
			<footer className="site-footer">
				<div className="credit">Made by <a href={creditLink} target="_blank">Daniel Jauch</a></div>
				<div>
					<span className="copyright">&copy; {(new Date()).getFullYear()}</span>
					<span className="version-info" onClick={_ => openModal('Changelog')}>{versionNumber}</span>
				</div>
			</footer>
		);
	}
}