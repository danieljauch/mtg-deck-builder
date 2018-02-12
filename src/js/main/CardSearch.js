// https://github.com/MagicTheGathering/mtg-sdk-javascript
import React, { Component, Fragment } from 'react';
import mtg, { card, set } from 'mtgsdk';

// JavaScript libraries and files:
import Card from './Card.js';

export default class CardSearch extends Component{
  constructor (props) {
		super(props);
	}

	cardSearch = query => {
		let ret;

		card.where(query)
			.then(result => {
				ret = result;
			});

		return ret;
	}
	setSearch = query => {
		let ret;
		
		set.where(query)
			.then(result => {
				ret = result;
			});

		return ret;
	}

	render () {
		let { cardQuery } = this.props;

		let queryList = this.cardSearch(cardQuery);

		return (
			<React.Fragment>
				<div></div>
				{
					// queryList.map(() => {

					// })
				}
			</React.Fragment>
		);
	}
}