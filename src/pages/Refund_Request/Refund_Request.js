import './RefundRequest.css';
// import Ticket from './ticket.js';
import './ticket.css';
import './modal.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Refund_Request = () => {
	// when i get the ticket data from the
	// DB i have to add the rating variable to each one.
	const [ticketsData, setTicketsData] = useState([
		{
			ticket_id: 1,
			trans_id: 1,
			status: 'active',
			user_id: 1,
			sub_id: 1,
			zone_id: 1,
			origin: 'Rehaab',
			destination: '6 Octobar',
			rating: 0,
		},
		{
			ticket_id: 2,
			trans_id: 1,
			status: 'active',
			user_id: 1,
			sub_id: 1,
			zone_id: 1,
			origin: '3en Shams',
			destination: 'Zamalek',
			rating: 0,
		},
		{
			ticket_id: 3,
			trans_id: 1,
			status: 'expired',
			user_id: 1,
			sub_id: 1,
			zone_id: 1,
			origin: 'Maadi',
			destination: 'Tagamo3',
			rating: 0,
		},
		{
			ticket_id: 4,
			trans_id: 1,
			status: 'expired',
			user_id: 1,
			sub_id: 1,
			zone_id: 1,
			origin: 'El shams',
			destination: 'El Gesh',
			rating: 0,
		},
	]);

	const [refundModal, setRefundModal] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedTicketId, setSelectedTicketId] = useState(null);

	const [value, setValue] = useState(2);

	const handleRatingChange = (ticketId, newValue) => {
		setTicketsData((prevData) =>
			prevData.map((ticket) =>
				ticket.ticket_id === ticketId ? { ...ticket, rating: newValue } : ticket
			)
		);
	};

	const toggleRefundModal = () => {
		setRefundModal(!refundModal);
	};

	const openModal = (ticketId) => {
		setSelectedTicketId(ticketId);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	// const [ticketsData, setTicketsData] = useState([]);

	// useEffect(() => {
	// 	console.log('USE EFFECT CALLED');
	// 	getTickets();
	// }, []);

	// const getTickets = async () => {
	// 	try {
	// 		const response = await fetch('http://localhost:3000/api/v1/users/tickets', {
	// 			method: 'GET',
	// 		});
	// 		const jsonData = await response.json();
	// 		setTicketsData(jsonData);
	// 		console.log(jsonData);
	// 		console.log('HEREEEEE');
	// 	} catch (error) {
	// 		console.error('Error fetching data!!!:', error);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	// const fetchData = async () => {
	// 	try {
	// 		const response = await fetch('http://localhost:3000/api/v1/users/refund_request/', {
	// 			method: 'POST',
	// 		});
	// 		const jsonData = await response.json();
	// 		setData(jsonData);
	// 	} catch (error) {
	// 		console.error('Error fetching data!!!:', error);
	// 	}
	// };

	return (
		<div className="RR-page-body">
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
				integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
				crossorigin="anonymous"
				referrerpolicy="no-referrer"
			/>

			<header>Your Tickets</header>

			{ticketsData.map((ticket) => (
				<div className="RRcontainer" key={ticket.ticket_id}>
					<div className="ticket-box">
						<ul className="ticket-left">
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>

						<ul className="ticket-right">
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<div className="ticket" onClick={() => openModal(ticket.ticket_id)}>
							{/* <span className="airline">WetroMetro</span> */}
							<span className="airline">{ticket.ticket_id}</span>
							<span className="airline airlineslip">WetroMetro</span>
							<span className="boarding">Boarding pass</span>
							<div className="contentTicket">
								<div className="routeSection">
									<span className="jfk">{ticket.origin}</span>
									<span className="plane">
										<svg
											clip-rule="evenodd"
											fill-rule="evenodd"
											height="60"
											width="60"
											image-rendering="optimizeQuality"
											shape-rendering="geometricPrecision"
											text-rendering="geometricPrecision"
											viewBox="0 0 500 500"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g stroke="#222">
												<line
													fill="none"
													stroke-linecap="round"
													stroke-width="30"
													x1="300"
													x2="55"
													y1="390"
													y2="390"
												/>
												<path
													d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
													fill="#222"
													stroke-linejoin="round"
													stroke-width="10"
												/>
											</g>
										</svg>
									</span>
									<span className="sfo">{ticket.destination}</span>
								</div>

								<span className="jfk jfkslip">------</span>
								<span className="plane planeslip">
									<svg
										clip-rule="evenodd"
										fill-rule="evenodd"
										height="50"
										width="50"
										image-rendering="optimizeQuality"
										shape-rendering="geometricPrecision"
										text-rendering="geometricPrecision"
										viewBox="0 0 500 500"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g stroke="#222">
											<line
												fill="none"
												stroke-linecap="round"
												stroke-width="30"
												x1="300"
												x2="55"
												y1="390"
												y2="390"
											/>
											<path
												d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
												fill="#222"
												stroke-linejoin="round"
												stroke-width="10"
											/>
										</g>
									</svg>
								</span>
								<span className="sfo sfoslip">------</span>
								<div className="ticket-sub-content">
									<span className="watermark">WetroMetro</span>
									<span className="name">
										PASSENGER NAME
										<br />
										<span>Rex, Anonasaurus</span>
									</span>
									<span className="flight">
										FLIGHT N&deg;
										<br />
										<span>X3-65C3</span>
									</span>
									<span className="gate">
										GATE
										<br />
										<span>11B</span>
									</span>
									<span className="seat">
										SEAT
										<br />
										<span>45A</span>
									</span>
									<span className="boardingtime">
										BOARDING TIME
										<br />
										<span>8:25PM ON AUGUST 2013</span>
									</span>

									<span className="flight flightslip">
										FLIGHT N&deg;
										<br />
										<span>X3-65C3</span>
									</span>
									<span className="seat seatslip">
										SEAT
										<br />
										<span>45A</span>
									</span>
									<span className="name nameslip">
										PASSENGER NAME
										<br />
										<span>Rex, Anonasaurus</span>
									</span>
								</div>
							</div>
							<div className="barcode"></div>
							<div className="barcode slip"></div>
						</div>
					</div>
					<div className="RRratingScale">
						<Box
							sx={{
								'& > legend': { mt: 2 },
								'& .MuiRating-iconFilled': {
									color: '#269BE3',
								},
							}}
						>
							<Typography component="legend"></Typography>
							<Rating
								name={`rating-${ticket.ticket_id}`}
								value={ticket.rating}
								onChange={(event, newValue) => {
									handleRatingChange(ticket.ticket_id, newValue);
								}}
							/>
						</Box>
					</div>
					{modalOpen && (
						<div className="RRmodal">
							<div onClick={toggleRefundModal} className="RRoverlay">
								<div className="RR-modal-form">
									<h2>Are you sure you want to request a refund for this ticket?</h2>
									<h3>TICKET-ID: {selectedTicketId}</h3>
									<p>
										--Refund requests may take up to 2-4 business days to be processed.--
									</p>
									<div className="modal-Refundcolumn">
										<button className="close-model" onClick={closeModal}>
											Back
										</button>
										<button className="close-model">Request Refund</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Refund_Request;
