import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});
	var [deleteCard, setDeleteCard] = useState({});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contact.map((card, index) => {
							return (
								<ContactCard
									key={index}
									index={index}
									card={card}
									onEdit={() => {
										setDeleteCard(card);
									}}
									onDelete={() => {
										return setDeleteCard(card), setState({ showModal: true });
									}}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal card={deleteCard} show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
