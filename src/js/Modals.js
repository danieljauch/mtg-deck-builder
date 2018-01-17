// Core Components:
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Modals extends Component {
	constructor (props) {
		super(props);

		this.idName = this.props.idName;
		this.modalTitle = this.props.modalTitle;
		this.modalContent = this.props.modalContent;
	}

	render () {
		return (
			<section className="modals">
				<div classname="modal-back"></div>
				<div classname="modal-close">
					<FontAwesome name="times" />
				</div>
				{/* Modals here */}
			</section>
		);
	}
}


{/* <article className="modal" id={this.idName}>
	<header className="modal-header">
		<h2>{this.modalTitle}</h2>
	</header>
	<div className="modal-content">{this.modalContent}</div>
</article> */}