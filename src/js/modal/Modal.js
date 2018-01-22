// Core Components:
import React, { Component } from 'react';

export default class Modal extends Component {
	render () {
		let { modalTitle,
			modalContent,
			isOpen } = this.props;

		return (
			<article className={isOpen ? "modal open" : "modal"}>
				<header className="modal-header">
					<h2>{modalTitle}</h2>
				</header>
				<div className="modal-content">{modalContent}</div>
			</article>
		);
	}
}