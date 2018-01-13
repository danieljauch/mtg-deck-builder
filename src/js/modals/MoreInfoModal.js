import React from 'react';
import Modal from '../Modal.js';

export default class MoreInfoModal extends Modal {
	constructor (props) {
		super(props);

		this.idName = 'moreInfoModal';
		this.modalTitle = 'moreInfoModal';
		this.modalContent = 'moreInfoModal';
	}

	render () {
		return (
			<article className="modal" id={this.idName}>
				<header className="modal-header">
					<h2>{this.modalTitle}</h2>
				</header>
				<div className="modal-content">{this.modalContent}</div>
			</article>
		);
	}
}