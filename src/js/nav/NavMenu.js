import React from 'react';
import App from '../../App.js';
import MenuList from './MenuList.js';

const NavMenu = _ => (
	<nav className="menu">
		<div className="mobile-menu-toggle" onClick={App.toggleMobileMenu}>
			<i className="fa fa-list" aria-hidden="true"></i>
		</div>
		<div className="mobile-menu-dark-back"></div>
		<MenuList />
	</nav>
);

export default NavMenu;