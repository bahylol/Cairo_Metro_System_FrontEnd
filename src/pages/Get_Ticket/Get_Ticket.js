import Footer from '../Footer/Footer.js';

import './Get_Ticket.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import soundEffect from '../../Assets/ChooChoo.mp3';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const GetTicket = () => {
	const audioRef = useRef(null);

	const notify = (alert) => {
		toast.error(alert, {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};
	const confirm = (alert) => {
		toast.success(alert, {
			position: 'top-center',
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};

	const navigate = useNavigate();

	const [origin, setOrigin] = useState('');
	const [dest, setDest] = useState('');
	const [journeyTime, setJourneyTime] = useState('');
	let [stations, setStations] = useState([]);

	useEffect(() => {
		const getStations = async () => {
			try {
				const response = await fetch('http://localhost:3000/getAll/Stations', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});
				const data = await response.json();
				stations = data.map((item) => item);
				console.log(stations);
				const allStations = stations.map(({ description: label, ...rest }) => ({
					label,
					...rest,
				}));
				setStations(allStations);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		getStations();
	}, []);

	const handlePurchase = (e) => {
		e.preventDefault();
		if (origin === '' || dest === '' || journeyTime === '') {
			notify('Incomplete Journy Information!');
		} else {
			fetch('http://localhost:3000/create-checkout-session-ticket', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					token: `session_token=${localStorage.getItem('session_token')}`,
				},
				body: JSON.stringify({
					origin: origin.label,
					destination: dest.label,
					start_time: journeyTime,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					if (data[0] === 200) {
						audioRef.current.play();
						window.location.href = data[1];
					} else {
						notify(data[1]);
					}
				})
				.catch((error) => console.error(error, 'THIS IS A BIGGGG ERROR'));
		}
	};

	const checkPrice = (e) => {
		e.preventDefault();
		if (origin === '' || dest === '') {
			notify('Incomplete Journy Information!');
		} else {
			fetch('http://localhost:3000/api/v1/payment/ticket/checkprice', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					origin: origin.label,
					destination: dest.label,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					if (data[0] === 200) {
						confirm(data[1]);
					} else {
						notify(data[1]);
					}
				})
				.catch((error) => console.error(error, 'THIS IS A BIGGGG ERROR'));
		}
	};

	const handleUseSub = (e) => {
		e.preventDefault();
		if (origin === '' || dest === '' || journeyTime === '') {
			notify('Incomplete Journy Information!');
		}
		// else if (
		// 	cardType === '' ||
		// 	holderName === '' ||
		// 	expDate === '' ||
		// 	cardNumber === '' ||
		// 	cardCVV === ''
		// ) {
		// 	notify('Incomplete Payment Information!');
		// }
		else {
			fetch('http://localhost:3000/api/v1/payment/subscription/ticket/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					token: `session_token=${localStorage.getItem('session_token')}`,
				},
				body: JSON.stringify({
					origin: origin.label,
					destination: dest.label,
					start_time: journeyTime,
					// card_type: cardType,
					// credit_card: cardNumber,
					// holder_name: holderName,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					// localStorage.setItem('session_token', data[0]);
					if (data[0] === 200) {
						confirm('Ticket successfully booked!');
						audioRef.current.play();
						setTimeout(function () {
							navigate('/tickets/purchase');
						}, 2500);
					} else if (data[0] === 401) {
						notify('You already booked a ticket to this ride');
					} else if (data[0] === 402) {
						notify('You are not subscribed to an active plan');
					} else if (data[0] === 403) {
						notify('You have reached your subscription plan usage limit!');
					} else if (data[0] === 405) {
						notify('Your subscription plan does not cover the zones of this ticket!');
					} else if (data[0] === 400) {
						notify('Invalid Joruney Origin->Destination Information!');
					}
				})
				.catch((error) => console.error(error, 'THIS IS A BIGGGG ERROR'));
			// .catch((error) => {
			// 	alert('You are currently not subscribed to an active plan');
			// });
		}
	};

	return (
		<>
			<header>
				<audio id="soundEffectAudio" ref={audioRef}>
					<source src={soundEffect} type="audio/mpeg" />
				</audio>
			</header>
			<div className="GT-page">
				<div className="Get-Ticket-Whole-Page">
					<header>Book Ticket</header>
					<div className="GTSection1">
						<div className="GTBoxPickup">
							<p>Where do you want to go?</p>
							<div className="GTBoxFromTo">
								<Autocomplete
									disablePortal
									className="GTBoxFrom"
									options={stations}
									value={origin}
									onChange={(event, newValue) => {
										setOrigin(newValue);
									}}
									renderInput={(params) => <TextField {...params} label="Origin" />}
								/>
								<i className="fa-solid fa-arrows-up-down"></i>
								<div className="GTBoxForm">
									<Autocomplete
										disablePortal
										className="GTBoxFrom"
										options={stations}
										value={dest}
										onChange={(event, newValue) => {
											setDest(newValue);
										}}
										renderInput={(params) => (
											<TextField {...params} label="Destination" />
										)}
									/>
								</div>
								<LocalOfferIcon className="priceIcon" onClick={checkPrice} />
							</div>

							<div className="GTBoxDate">
								<p>Choose Date</p>
								<input
									type="datetime-local"
									required
									onChange={(event) => setJourneyTime(event.target.value)}
								/>
							</div>

							<a href="htt" onClick={(e) => handlePurchase(e)}>
								Purchase Ticket
							</a>
							<a href="htt" onClick={(e) => handleUseSub(e)}>
								Use Subscription
							</a>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
			<Footer />
		</>
	);
};

export default GetTicket;

// UNCOMMENT TRANSACTION
// return (
// 	<>
// 		<div className="Get-Ticket-Whole-Page">
// 			<header>Purchase Ticket</header>
// 			<div className="GTSection1">
// 				<div className="GTBoxPickup">
// 					<p>Where do you want to go?</p>
// 					<div className="GTBoxFromTo">
// 						<input
// 							type="text"
// 							className="GTBoxFrom"
// 							placeholder="Station / stop / address"
// 							required
// 							onChange={(event) => setOrigin(event.target.value)}
// 						/>
// 						<i className="fa-solid fa-arrows-up-down"></i>
// 						<input
// 							type="text"
// 							className="GTBoxFrom"
// 							placeholder="Station / stop / address"
// 							required
// 							onChange={(event) => setDest(event.target.value)}
// 						/>
// 					</div>

// 					<div className="GTBoxDate">
// 						<p>Outbound journey</p>
// 						<input
// 							type="datetime-local"
// 							required
// 							onChange={(event) => setJourneyTime(event.target.value)}
// 						/>
// 					</div>

// 					<a href="htt" onClick={(e) => handlePrintTicket(e)}>
// 						Print Ticket
// 					</a>
// 					<a href="htt" onClick={(e) => handleUseSub(e)}>
// 						Use Subscription
// 					</a>
// 				</div>
// 			</div>
// 		</div>

// 		<div className="GT-page">
// 			<section className="GT-container">
// 				<header>Payment Information</header>
// 				<form className="GT-form">
// 					<div className="GT-column">
// 						<div className="GT-input-box">
// 							<label>Card Type</label>
// 							<input
// 								type="text"
// 								placeholder="Enter card type"
// 								required
// 								onChange={(event) => setCardType(event.target.value)}
// 							/>
// 						</div>

// 						<div className="GT-input-box">
// 							<label>Holder Name</label>
// 							<input
// 								type="text"
// 								placeholder="Enter holder name"
// 								required
// 								onChange={(event) => setHolderName(event.target.value)}
// 							/>
// 						</div>

// 						<div className="GT-input-box">
// 							<label>Expiration Date</label>
// 							<input
// 								type="date"
// 								placeholder="Enter expiration date"
// 								required
// 								onChange={(event) => setExpDate(event.target.value)}
// 							/>
// 						</div>
// 					</div>

// 					<div className="GT-column">
// 						<div className="GT-input-box">
// 							<label>Card Number</label>
// 							<input
// 								type="number"
// 								placeholder="0000 0000 0000 0000"
// 								required
// 								onChange={(event) => setCardNumber(event.target.value)}
// 							/>
// 						</div>
// 						<div className="GT-input-box">
// 							<label>CVV</label>
// 							<input
// 								type="number"
// 								placeholder="000"
// 								required
// 								onChange={(event) => setCardCVV(event.target.value)}
// 							/>
// 						</div>
// 					</div>
// 					<div>
// 						<FormGroup>
// 							<FormControlLabel
// 								className="rememberSwitch"
// 								control={<Switch defaultChecked />}
// 								label="Remember My Payment Information"
// 							/>
// 						</FormGroup>
// 					</div>
// 				</form>
// 			</section>
// 		</div>
// 		<Footer />
// 	</>
// );
