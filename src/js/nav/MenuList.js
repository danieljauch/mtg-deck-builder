import React, { Component } from 'react';
import MenuItem from './MenuItem.js';

const MenuList = _ => (
	<ul className="menu-list">
		<MenuItem stepNumber="1" stepName="Format" chosenInfo="" />
		<MenuItem stepNumber="2" stepName="Deck Type" chosenInfo="" />
		<MenuItem stepNumber="3" stepName="Lands" chosenInfo="" />
		<MenuItem stepNumber="4" stepName="Creatures" chosenInfo="" />
		<MenuItem stepNumber="5" stepName="Spells" chosenInfo="" />
		<MenuItem stepNumber="6" stepName="Print / Export" chosenInfo="" />
	</ul>
);

export default MenuList;