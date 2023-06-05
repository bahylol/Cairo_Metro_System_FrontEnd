import Footer from '../Footer/Footer.js';

import './RefundRequest.css';
// import Ticket from './ticket.js';
import './ticket.css';
import './modal.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Refund_Request = () => {
	const [refundModal, setRefundModal] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedTicketId, setSelectedTicketId] = useState(null);
	const [description, setDescription] = useState('');

	const handleRefundRequested = () => {
		if (description === '') {
			alert('Description is required!');
		}

		fetch('http://localhost:3000/api/v1/users/refund_request/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				token: `session_token=${localStorage.getItem('session_token')}`,
			},
			body: JSON.stringify({
				ticket_id: selectedTicketId,
				description: description,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				localStorage.setItem('session_token', data[0]);
				if (data[0] === 200) {
					closeModal();
					alert('Refund Request Sent!');
				} else if (data[0] === 400) {
					alert('Refund rejected! Ticket already expired/used');
				} else if (data[0] === 402) {
					alert('Refund was already requested and is being processed at the moment...');
				}
			})
			.catch((error) => console.error(error));
	};

	const [ticketsData, setTicketsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3000/api/v1/users/tickets', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						token: `session_token=${localStorage.getItem('session_token')}`,
					},
				});
				const data = await response.json();
				setTicketsData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	console.log('TICKETS DATA');
	console.log(ticketsData);
	// -------------------------------------------------------------------------------------------------------------

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

	return (
		<>
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
								<span className="airline">Ticket ID: {ticket.ticket_id}</span>
								<span className="airline airlineslip">WetroMetro</span>
								<span className="boarding">Boarding pass</span>
								<div className="contentTicket">
									<div className="routeSection">
										<span className="jfk">{ticket.origin}</span>
										<span className="plane">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="50"
												height="50"
												viewBox="0 0 500 500"
												shape-rendering="geometricPrecision"
												text-rendering="geometricPrecision"
												image-rendering="optimizeQuality"
												fill-rule="evenodd"
												clip-rule="evenodd"
											>
												<g stroke="#222">
													<line
														x1="445"
														y1="200"
														x2="145"
														y2="200"
														fill="none"
														stroke-linecap="round"
														stroke-width="30"
													/>
													<line
														x1="445"
														y1="250"
														x2="145"
														y2="250"
														fill="none"
														stroke-linecap="round"
														stroke-width="30"
													/>
													<path
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
											xmlns="http://www.w3.org/2000/svg"
											width="50"
											height="50"
											viewBox="0 0 500 500"
											shape-rendering="geometricPrecision"
											text-rendering="geometricPrecision"
											image-rendering="optimizeQuality"
											fill-rule="evenodd"
											clip-rule="evenodd"
										>
											<g stroke="#222">
												<line
													x1="445"
													y1="200"
													x2="145"
													y2="200"
													fill="none"
													stroke-linecap="round"
													stroke-width="30"
												/>
												<line
													x1="445"
													y1="250"
													x2="145"
													y2="250"
													fill="none"
													stroke-linecap="round"
													stroke-width="30"
												/>
												<path fill="#222" stroke-linejoin="round" stroke-width="10" />
											</g>
										</svg>
									</span>
									<span className="sfo sfoslip">------</span>
									<div className="ticket-sub-content">
										<span className="watermark">WetroMetro</span>
										<span className="name">
											PASSENGER NAME
											<br />
											<span>{ticket.username}</span>
										</span>
										<span className="flight">
											STATUS
											<br />
											<span>{ticket.status}</span>
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
											<span>
												{new Date(ticket.start_time).toLocaleDateString('en-US', {
													year: 'numeric',
													month: 'long',
													day: 'numeric',
												})}
											</span>
										</span>

										<span className="flight flightslip">
											Status <br />
											<span>{ticket.status}</span>
										</span>
										<span className="seat seatslip">
											SEAT
											<br />
											<span>45A</span>
										</span>
										<span className="name nameslip">
											PASSENGER NAME
											<br />
											<span>{ticket.username}</span>
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
											--Refund requests may take up to 2-4 business days to be
											processed.--
										</p>
										<Box
											component="form"
											sx={{
												'& .MuiTextField-root': { m: 1, width: '45ch' },
											}}
											noValidate
											autoComplete="off"
										>
											<TextField
												id="filled-textarea"
												label="Why would you like a refund?"
												placeholder="Enter Description"
												multiline
												onChange={(event) => setDescription(event.target.value)}
												variant="filled"
												InputLabelProps={{
													style: {
														color: '#EE766D',
													},
												}}
												maxRows={10}
											/>
										</Box>
										<div className="modal-Refundcolumn">
											<button className="close-model" onClick={closeModal}>
												Back
											</button>
											<button
												className="close-model"
												onClick={(e) => handleRefundRequested(e)}
											>
												Request Refund
											</button>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				))}
				<Footer />
			</div>
		</>
	);
};

export default Refund_Request;
