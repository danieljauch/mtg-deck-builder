// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// JavaScript libraries and files:
import App from '../App.js';

export default class Aside extends Component {
	render () {
		let { toggleMobileMenu,
			goToStep,
		 	version } = this.props;

		return (
			<aside className="app-aside">
				<header className="site-header">
					<h1 className="header-title">MTG Deck Builder</h1>
					<nav className="menu">
						<div className="mobile-menu-toggle" onClick={_ => this.toggleMobileMenu}>
							<FontAwesome name="list" />
						</div>
						<div className="mobile-menu-dark-back"></div>
						<ul className="menu-list">
							<MenuItem stepNumber={1}
								stepName="Format"
								chosenInfo="Standard"
								handleClick={_ => this.goToStep(1)} />
							<MenuItem stepNumber={2}
								stepName="Deck Type"
								chosenInfo="Dinosaurs"
								handleClick={_ => this.goToStep(2)} />
							<MenuItem stepNumber={3}
								stepName="Lands"
								chosenInfo="23 chosen"
								handleClick={_ => this.goToStep(3)} />
							<MenuItem stepNumber={4}
								stepName="Creatures"
								chosenInfo="16 chosen"
								handleClick={_ => this.goToStep(4)} />
							<MenuItem stepNumber={5}
								stepName="Spells"
								chosenInfo="21 chosen"
								handleClick={_ => this.goToStep(5)} />
							<MenuItem stepNumber={6}
								stepName="Print / Export"
								chosenInfo=""
								handleClick={_ => this.goToStep(6)} />
						</ul>
					</nav>
				</header>
				<div className="aside-colapse-button">
					<FontAwesome name="arrow-left" />
				</div>
				<SiteFooter creditLink="https://danieljauch.bitbucket.io/"
					versionNumber={`v. ${version}`} />
			</aside>
		)
	}
}

class SiteHeader extends Component {
	render () {
		let { siteTitle,
			logoURL,
			handleClick } = this.props;

		return (
			<header className="site-header">
				<h1 className="header-title">{siteTitle}</h1>
				<img src={logoURL} alt={siteTitle} className="logo" />
				<NavMenu />
			</header>
		);
	}
}

const menuListItems = [
	{stepNumber: "1", stepName: "Format", chosenInfo: ""},
	{stepNumber: "2", stepName: "Deck Type", chosenInfo: ""},
	{stepNumber: "3", stepName: "Lands", chosenInfo: ""},
	{stepNumber: "4", stepName: "Creatures", chosenInfo: ""},
	{stepNumber: "5", stepName: "Spells", chosenInfo: ""},
	{stepNumber: "6", stepName: "Print / Export", chosenInfo: ""}
];

class MenuList extends Component {
	render () {
		let { list,
			handleClick } = this.props;

		return (
			<ul className="menu-list">
				{list.map(item => {
						return (
							<MenuItem stepNumber={item.stepNumber}
								stepName={item.stepName}
								chosenInfo={item.chosenInfo}
								onClick={handleClick} />
						);
					}
				)}
			</ul>
		)
	}
}

const NavMenu = _ => (
	<nav className="menu">
		<div className="mobile-menu-toggle" onClick={App.toggleMobileMenu}>
			<FontAwesome name="list" />
		</div>
		<div className="mobile-menu-dark-back"></div>
		<MenuList list={menuListItems} handleClick={this.handleClick} />
	</nav>
);

class MenuItem extends Component {
	render () {
		let { stepNumber,
			stepName,
			chosenInfo,
			handleClick } = this.props;

		return (
			<li className="menu-item" onClick={handleClick}>
				<div>
					<span className="step-number">#{stepNumber}: </span>
					<span className="step-type">{stepName}</span>
				</div>
				<div className="chosen-info">{chosenInfo}</div>
			</li>
		);
	}
}

class SiteFooter extends Component {
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
