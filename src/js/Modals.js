// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// JavaScript libraries and files:
import Modal from './modal/Modal.js';

export default class Modals extends Component {
	render () {
		let { modalListInfo,
			closeModals,
			openModal } = this.props;

		return (
			<section className="modals">
				<div className="modal-back"></div>
				<div className="modal-close" onClick={closeModals}>
					<FontAwesome name="times" />
				</div>
				
				{modalListInfo.map(item => {
						return (
							<Modal modalTitle={item.modalTitle}
								modalContent={item.modalContent}
								isOpen={openModal === item.modalTitle} />
						);
					}
				)}
			</section>
		);
	}
}