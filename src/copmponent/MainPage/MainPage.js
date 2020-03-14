import React, { useState } from 'react';
import './MainPage.css';
import data from '../../data/user';
import Member from '../Member/Member';
import Parson from '../Parson/Parson';

const MainPage = () => {
	const users = [];
	const [userData, setUserData] = useState(users);
	const [members, setMember] = useState([]);
	const friendHandler = (user) => {
		const totalMember = [...members, user];
		setMember(totalMember);
	};

	// Formatted  data
	formattedData(data);
	function formattedData(userArray) {
		for (let index = 0; index < userArray.length; index++) {
			const user = userArray[index];
			const formatUser = {
				name: user.name,
				email: user.email,
				img: user.img,
				username: user.username,
				phone: user.phone,
				address: user.location,

				income: Math.floor(Math.random() * (1000 - 500) + 500)
			};

			users.push(formatUser);
		}
	}

	return (
		<div className="main-body">
			<div className="all-user">
				{userData.map((user) => (
					<Member user={user} friendHandler={friendHandler}></Member>
				))}
			</div>
			<div className="member-status">
				<Parson friends={members}>></Parson>
			</div>
		</div>
	);
};

export default MainPage;
