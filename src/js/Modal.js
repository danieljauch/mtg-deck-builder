// Core Components:
import React, { Component } from 'react';

export default class Modal extends Component {
	constructor (props) {
		super(props);

		this.idName = this.props.idName;
		this.modalTitle = this.props.modalTitle;
		this.modalContent = this.props.modalContent;
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