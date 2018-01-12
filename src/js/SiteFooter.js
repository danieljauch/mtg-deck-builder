import React, { Component } from 'react';

export default class SiteFooter extends Component {
	render () {
		let { creditLink,
			versionNumber } = this.props;
		
		return (
			<footer class="site-footer">
				<div class="copywrite">&copy; 2017</div>
				<div class="credit">Made by <a href={creditLink}>Daniel Jauch</a></div>
				<div class="version-info">{versionNumber}</div>
			</footer>
		);
	}
}