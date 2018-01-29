// https://github.com/MagicTheGathering/mtg-sdk-javascript
import mtg, { card } from 'mtgsdk';

export default class CardSearch {
  constructor () {
		
	}

	makeSearch (query) {
		card.where(query)
			.then(result => {
				console.log('card search result for:');
				console.log(query);
				console.log('---');
				console.log(result);
			});
	}
}