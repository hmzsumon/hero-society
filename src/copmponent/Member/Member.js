import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';

import {
	faUserCircle,
	faPhoneAlt,
	faEnvelope,
	faWallet,
	faUserPlus,
	faMapMarker,
	faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import './Member.css';

const Member = (props) => {
	const { name, username, img, email, address, income, phone } = props.user;
	const [btnInfo, setBtnInfo] = useState({
		btnText: 'Add Member',
		disable: false,
		icon: faUserPlus,
		btnClass: 'add-member-btn'
	});

	function btnHandler() {
		props.friendHandler(props.user);
		btnInfo.btnText = 'Member';
		btnInfo.disable = true;
		btnInfo.icon = faUserFriends;
		btnInfo.btnClass = 'member-btn';
	}

	return (
		<div className="container">
			<div className="user float-left mx-2 my-3">
				<div>
					<Card style={{ width: '18rem' }}>
						<div className="user-img">
							<Card.Img variant="top" src={img} />
						</div>

						<Card.Body className="user-description">
							<Card.Title className="text-center">{name}</Card.Title>
							<p className="text-center">
								<FontAwesomeIcon icon={faUserCircle} /> {username}
							</p>
							<Card.Text className="text-left">
								<div>
									<p>
										<small>
											<strong>
												<FontAwesomeIcon icon={faPhoneAlt} />
											</strong>{' '}
											{phone} <br />
											<strong>
												<FontAwesomeIcon icon={faEnvelope} />
											</strong>{' '}
											{email}
										</small>
									</p>
									<h5>
										Address <FontAwesomeIcon icon={faMapMarker} />
									</h5>

									<address>
										{address.state}, {address.country}
									</address>
								</div>

								<p>
									<FontAwesomeIcon icon={faWallet} /> ${income}
								</p>
							</Card.Text>

							<button className={btnInfo.btnClass} disabled={btnInfo.disable} onClick={btnHandler}>
								<FontAwesomeIcon icon={btnInfo.icon} /> {btnInfo.btnText}
							</button>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Member;
