// https://github.com/MagicTheGathering/mtg-sdk-javascript
import React, { Component } from 'react';
import mtg, { card, set } from 'mtgsdk';

// JavaScript libraries and files:
import Card from './Card.js';

export default class CardSearch {
  constructor () {
		
	}

	cardSearch (query) {
		card.where(query)
			.then(result => {
				console.log('card search result for:');
				console.log(query);
				console.log('---');
				console.log(result);
				console.log('new card:');
				let firstResult = result[0];
				let firstResultCard = new Card(
					firstResult.name,
					firstResult.cmc,
					firstResult.colorIdentity,
					firstResult.colors,
					firstResult.id,
					firstResult.layout,
					firstResult.legalities,
					firstResult.manaCost,
					firstResult.rarity,
					firstResult.text,
					firstResult.type,
					firstResult.types
				);
				console.log(firstResultCard);
			});
	}
	setSearch (query) {
		set.where(query)
			.then(result => {
				console.log('set search result for:');
				console.log(query);
				console.log('---');
				console.log(result);
			});
	}
}