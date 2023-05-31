import './RR.css';
import { useEffect, useState } from 'react';

const Refund_Request = () => {
	const [requests, setRequests] = useState([
		{ title: 'Request 1', body: 'lore ipsum...', author: 'mario', id: 1 },
		{ title: 'Request 2', body: 'lore ipsum...', author: 'Luigi', id: 2 },
		{ title: 'Request 3', body: 'lore ipsum...', author: 'Joe', id: 3 },
	]);

	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch('http://localhost:3000/api/v1/users/refund_request/', {
				method: 'POST',
			});
			const jsonData = await response.json();
			setData(jsonData);
		} catch (error) {
			console.error('Error fetching data!!!:', error);
		}
	};

	return (
		<section className="RRcontainer">
			<header>Your Requests</header>

			{requests.map((request) => (
				<div className="Request Preview" key="request.id">
					<h2>{request.title}</h2>
					<p>Written by {request.author}</p>
				</div>
			))}

			<form action="#" className="RRform">
				{/* <div className="RRinput-box">
					<label className="labels">Email</label>
					<input type="text" placeholder="Enter email" required />
				</div>

				<div className="RRinput-box">
					<label className="labels">Password</label>
					<input type="password" placeholder="Enter password" required />
				</div> */}

				{/* <button>Log in</button> */}
			</form>
		</section>
	);
};

export default Refund_Request;
