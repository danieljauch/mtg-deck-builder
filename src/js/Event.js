import App from '../App.js';

export default class Event {
	constructor () {

	}

  goToStep (stepNumber) {
    console.log('Going to step', stepNumber);
    return true;
	}
	toggleMobileMenu () {
    console.log('Toggling mobile menu');
    return true;
	}
}