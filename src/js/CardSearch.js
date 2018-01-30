// https://github.com/MagicTheGathering/mtg-sdk-javascript
import mtg, { card, set } from 'mtgsdk';

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

class Card {
	constructor (name, 	// String				| "Duress"
			cmc, 						// int					| 1
			colorIdentity, 	// String Array	| ["B"]
			colors, 				// String Array	| ["Black"]
			id, 						// String				| "ea6c1128726226857c91278cf4eda6c17043b7df"
			layout, 				// String				| "normal"
			legalities,			/* Object Array	| {format: "Commander", legality: "Legal"},
											 *								{format: "Ixalan Block", legality: "Legal"},
											 *								{format: "Khans of Tarkir Block", legality: "Legal"},
											 *								{format: "Legacy", legality: "Legal"},
											 *								{format: "Modern", legality: "Legal"},
											 *								{format: "Standard", legality: "Legal"},
											 *								{format: "Urza Block", legality: "Legal"},
											 *								{format: "Vintage", legality: "Legal"}
											 */
			manaCost,				// String				| "{B}"
			rarity,					// String				| "Special"
			text,						// String				| "Target opponent reveals his or her hand. You choose a noncreature, nonland card from it. That player discards that card."
			type,						// String				| "Sorcery"
			types						/* String Array	| ["Sorcery"] */) {

		console.log('new card created!');
		
		this.name = name;
		this.cmc = cmc;
		this.colorIdentity = colorIdentity;
		this.colors = colors;
		this.imageURL = `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${id}`;
		this.layout = layout;
		this.legalities = this._formatLegalities(legalities);
		this.manaCost = manaCost;
		this.rarity = rarity;
		this.text = text;
		this.type = type;
		this.types = types;
	}

	// Getters and setters
	get manaCostImageSrcArray () {
		let manaCostArray = this.manaCost.split('{','}');
		let formattedOutput = [];

		for (let i = 0, l = manaCostArray.length; i < l; i++) {
			if (manaCostArray[i] != '')
				formattedOutput.push(manaCostArray);
		}

		return formattedOutput;
	}
	get htmlVersion () {

	}
	get transcribedHtmlVersion () {
		let separateTags = this.text.split();
		let formattedOutput = [];

		for (let i = 0, l = separateTags.length; i < l; i++) {
			if (separateTags[i] != '')
				formattedOutput.push(separateTags);
		}

		return formattedOutput;
	}

	// Private methods
	_formatLegalities (legalityObjectArray) {
		let formattedOutput = [];

		for (let i in legalityObjectArray) {
			if (legalityObjectArray[i].legality === "Legal")
				formattedOutput.push(legalityObjectArray[i].format);
		}

		return formattedOutput;
	}
}
const makeSymbolImageSrc = str => {
	let individualChars = str.split();
	let outputReplacement = {};

	for (let i = 0, l = individualChars.length; i < l; i++) {
		if (individualChars[i] == '{') {
			switch (individualChars[i + 1]) {
				case '1':
					outputReplacement[i+1] = <img src='' alt='{1}' />;
					break;

				case '2':
					outputReplacement[i+1] = <img src='' alt='{2}' />;
					break;

				case '3':
					outputReplacement[i+1] = <img src='' alt='{3}' />;
					break;

				case '4':
					outputReplacement[i+1] = <img src='' alt='{4}' />;
					break;

				case '5':
					outputReplacement[i+1] = <img src='' alt='{5}' />;
					break;

				case '6':
					outputReplacement[i+1] = <img src='' alt='{6}' />;
					break;

				case '7':
					outputReplacement[i+1] = <img src='' alt='{7}' />;
					break;

				case '8':
					outputReplacement[i+1] = <img src='' alt='{8}' />;
					break;

				case '9':
					outputReplacement[i+1] = <img src='' alt='{9}' />;
					break;

				case '10':
					outputReplacement[i+1] = <img src='' alt='{10}' />;
					break;

				case 'X':
					outputReplacement[i+1] = <img src='' alt='{X}' />;
					break;

				case 'W':
					outputReplacement[i+1] = <img src='' alt='{W}' />;
					break;

				case 'U':
					outputReplacement[i+1] = <img src='' alt='{U}' />;
					break;

				case 'B':
					outputReplacement[i+1] = <img src='' alt='{B}' />;
					break;

				case 'R':
					outputReplacement[i+1] = <img src='' alt='{R}' />;
					break;

				case 'G':
					outputReplacement[i+1] = <img src='' alt='{G}' />;
					break;

				case 'C':
					outputReplacement[i+1] = <img src='' alt='{C}' />;
					break;

				case 'T':
					outputReplacement[i+1] = <img src='' alt='{T}' />;
					break;

				case 'Q':
					outputReplacement[i+1] = <img src='' alt='{Q}' />;
					break;

				case 'S':
					outputReplacement[i+1] = <img src='' alt='{S}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;

				case '':
					outputReplacement[i+1] = <img src='' alt='{}' />;
					break;
				
				default: // '{0}'
					outputReplacement[i+1] = <img src='' alt='{0}' />;
			}
		}

		for (let i in outputReplacement) {
			individualChars[i-1] = '';
			individualChars[i] = outputReplacement[i];
			individualChars[i+1] = '';
		}

		return individualChars.join('');
	}
}