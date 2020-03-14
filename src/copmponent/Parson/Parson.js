import React from 'react';
import Card from 'react-bootstrap/Card';
import logo from '../../img/logo.png';
import './Parson.css';

const Parson = (props) => {
	const members = props.friends;

	const memberIncome = members.reduce((total, member) => Number(total) + Number(member.income), 0);

	return (
		<div className="friend-container mr-5">
			<Card style={{ width: '18rem' }}>
				<div className="logo-area">
					<Card.Img className="mylogo" variant="top" src={logo} />
				</div>
				<Card.Body>
					<Card.Title>Total Member: {members.length}</Card.Title>
					<Card.Title>Total Income: {memberIncome}</Card.Title>
					<Card.Text></Card.Text>
					<table>
						{members.map((user) => (
							<React.Fragment>
								<tr>
									<td>
										<img src={user.img} alt="" />
									</td>
									<td>{user.name}</td>
								</tr>
							</React.Fragment>
						))}
					</table>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Parson;
