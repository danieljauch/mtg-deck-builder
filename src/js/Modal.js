import React, { Component } from 'react';
import MoreInfoModal from './modals/MoreInfoModal.js';

const Modals = _ => (
	<section className="modals">
		<MoreInfoModal idName="moreInfoModal" modalTitle="More Info" modalContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi molestiae fugit quibusdam numquam perspiciatis eveniet voluptatum iste debitis ut officiis dolores quisquam, quis incidunt porro! Atque reprehenderit possimus architecto."/>
	</section>
);

class Modal extends Component {
	constructor (props) {
		super(props);

		this.idName = this.props.idName;
		this.modalTitle = this.props.modalTitle;
		this.modalContent = this.props.modalContent;
	}

	render () {
		return (
			<article className="modal" id={this.idName}>
				<header class="modal-header">
					<h2>{this.modalTitle}</h2>
				</header>
				<div class="modal-content">{this.modalContent}</div>
			</article>
		);
	}
}

export default Modals;