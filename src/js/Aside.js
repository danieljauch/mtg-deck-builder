// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// JavaScript libraries and files:
import App from '../App.js';

export default class Aside extends Component {
	render () {
		let { siteTitle,
			logoURL,
			toggleMobileMenu,
			goToStep,
		 	version } = this.props;

		return (
			<aside className="app-aside">
				<AppHeader siteTitle={siteTitle}
					logoURL={logoURL}
					toggleMobileMenu={toggleMobileMenu}
					goToStep={goToStep} />
				<div className="aside-colapse-button">
					<FontAwesome name="arrow-left" />
				</div>
				<SiteFooter creditLink="https://danieljauch.bitbucket.io/"
					versionNumber={`v. ${version}`} />
			</aside>
		)
	}
}

class AppHeader extends Component {
	render () {
		let { siteTitle,
			logoURL,
			toggleMobileMenu,
			goToStep } = this.props;

		return (
			<header className="app-header">
				<h1 className="header-title">{siteTitle}</h1>
				<img src={logoURL} alt={siteTitle} className="logo" />
				<NavMenu toggleMobileMenu={toggleMobileMenu}
					goToStep={goToStep} />
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
class NavMenu extends Component {
	render () {
		let { toggleMobileMenu,
			goToStep } = this.props;

		return (
			<nav className="menu">
				<div className="mobile-menu-toggle" onClick={_ => toggleMobileMenu}>
					<FontAwesome name="list" />
				</div>
				<div className="mobile-menu-dark-back"></div>
				<ul className="menu-list">
					<MenuItem stepNumber={1}
						stepName="Format"
						chosenInfo="Standard"
						handleClick={_ => goToStep(1)} />
					<MenuItem stepNumber={2}
						stepName="Deck Type"
						chosenInfo="Dinosaurs"
						handleClick={_ => goToStep(2)} />
					<MenuItem stepNumber={3}
						stepName="Lands"
						chosenInfo="23 chosen"
						handleClick={_ => goToStep(3)} />
					<MenuItem stepNumber={4}
						stepName="Creatures"
						chosenInfo="16 chosen"
						handleClick={_ => goToStep(4)} />
					<MenuItem stepNumber={5}
						stepName="Spells"
						chosenInfo="21 chosen"
						handleClick={_ => goToStep(5)} />
					<MenuItem stepNumber={6}
						stepName="Print / Export"
						chosenInfo=""
						handleClick={_ => goToStep(6)} />
				</ul>
			</nav>

			// <nav className="menu">
			// 	<div className="mobile-menu-toggle" onClick={_ => toggleMobileMenu}>
			// 		<FontAwesome name="list" />
			// 	</div>
			// 	<div className="mobile-menu-dark-back"></div>
			// 	<MenuList list={menuListItems} handleClick={_ => goToStep(6)} />
			// </nav>
		);
	}
}

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
