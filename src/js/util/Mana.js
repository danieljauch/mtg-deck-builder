// Core Components:
import React, { Component } from 'react';

export default class Mana extends Component {
	constructor (props) {
		super(props);
	}

	get _fullClassName (properties) {
		let fullClassName = 'ms';
		
		if (properties.hasOwnProperty('symbol'))
			fullClassName += ` ms-${properties.symbol}`;
		
		if (properties.hasOwnProperty('cost') &&
				properties.cost)
			fullClassName += ' ms-cost';
	
		if (properties.hasOwnProperty('shadow') &&
				properties.shadow)
			fullClassName += ' ms-shadow';

		if (properties.hasOwnProperty('split') &&
				properties.split)
			fullClassName += ' ms-split';

		if (properties.hasOwnProperty('half') &&
				properties.half)
			fullClassName += ' ms-half';
	
		if (properties.hasOwnProperty('size') &&
				properties.size > 1)
			fullClassName += ` ms-${properties.size}x`;
		
		return fullClassName;
	}

	render () {
		return (
			<i className={this._fullClassName(this.props)}></i>
		);
	}
}

// Icons: 			https://andrewgioia.github.io/Mana/icons.html
// Attributes:	https://andrewgioia.github.io/Mana/attributes.html
// Cheatsheet:	https://andrewgioia.github.io/Mana/cheatsheet.html
