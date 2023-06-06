import Footer from '../Footer/Footer.js';
import soundEffect from '../../Assets/ChooChoo.mp3';
import React, { useRef } from 'react';

import './Get_Ticket.css';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const GetTicket = () => {
	const audioRef = useRef(null);
	const chooChooSound = () => {
		audioRef.current.play();
	};
	const navigate = useNavigate();

	const [origin, setOrigin] = useState('');
	const [dest, setDest] = useState('');
	const [journeyTime, setJourneyTime] = useState('');
	const [cardType, setCardType] = useState('');
	const [holderName, setHolderName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [cardCVV, setCardCVV] = useState('');
	const [expDate, setExpDate] = useState('');

	const handlePrintTicket = (e) => {
		e.preventDefault();
		if (origin === '' || dest === '' || journeyTime === '') {
			alert('Incomplete Journy Information!');
		} else if (
			cardType === '' ||
			holderName === '' ||
			expDate === '' ||
			cardNumber === '' ||
			cardCVV === ''
		) {
			alert('Incomplete Payment Information!');
		} else {
			fetch('http://localhost:3000/api/v1/payment/ticket/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					token: `session_token=${localStorage.getItem('session_token')}`,
				},
				body: JSON.stringify({
					origin,
					destination: dest,
					start_time: journeyTime,
					card_type: cardType,
					credit_card: cardNumber,
					holder_name: holderName,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					// localStorage.setItem('session_token', data[0]);
					if (data[0] === 200) {
						chooChooSound();
						alert('Ticket successfully booked!');
						navigate('/tickets/purchase');
					} else if (data[0] === 401) {
						alert('You already booked a ticket to this ride');
					} else if (data[0] === 402) {
						alert('Error: Could not book ticket');
					} else if (data[0] === 400) {
						alert('Invalid Joruney Origin->Destination Information!');
					}
				})
				.catch((error) => console.error(error, 'THIS IS A BIGGGG ERROR'));
			// .catch((error) => {
			// 	alert('You are currently not subscribed to an active plan');
			// });
		}
	};

	const handleUseSub = (e) => {
		e.preventDefault();
		if (origin === '' || dest === '' || journeyTime === '') {
			alert('Incomplete Journy Information!');
		} else if (
			cardType === '' ||
			holderName === '' ||
			expDate === '' ||
			cardNumber === '' ||
			cardCVV === ''
		) {
			alert('Incomplete Payment Information!');
		} else {
			fetch('http://localhost:3000/api/v1/payment/subscription/ticket/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					token: `session_token=${localStorage.getItem('session_token')}`,
				},
				body: JSON.stringify({
					origin,
					destination: dest,
					start_time: journeyTime,
					card_type: cardType,
					credit_card: cardNumber,
					holder_name: holderName,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					// localStorage.setItem('session_token', data[0]);
					if (data[0] === 200) {
						chooChooSound();
						alert('Ticket successfully booked!');
						navigate('/tickets/purchase');
					} else if (data[0] === 401) {
						alert('You already booked a ticket to this ride');
					} else if (data[0] === 402) {
						alert('You are not subscribed to an active plan');
					} else if (data[0] === 403) {
						alert('You have reached your subscription plan usage limit!');
					} else if (data[0] === 405) {
						alert('Your subscription plan does not cover the zones of this ticket!');
					} else if (data[0] === 400) {
						alert('Invalid Joruney Origin->Destination Information!');
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
			<div className="Get-Ticket-Whole-Page">
				<header>Purchase Ticket</header>
				<div className="GTSection1">
					<div className="GTBoxPickup">
						<p>Where do you want to go?</p>
						<div className="GTBoxFromTo">
							<input
								type="text"
								className="GTBoxFrom"
								placeholder="Station / stop / address"
								required
								onChange={(event) => setOrigin(event.target.value)}
							/>
							<i className="fa-solid fa-arrows-up-down"></i>
							<input
								type="text"
								className="GTBoxFrom"
								placeholder="Station / stop / address"
								required
								onChange={(event) => setDest(event.target.value)}
							/>
						</div>

						<div className="GTBoxDate">
							<p>Outbound journey</p>
							<input
								type="datetime-local"
								required
								onChange={(event) => setJourneyTime(event.target.value)}
							/>
						</div>

						<a href="htt" onClick={(e) => handlePrintTicket(e)}>
							Print TicketchooChooSound()
						</a>
						<a href="htt" onClick={(e) => handleUseSub(e)}>
							Use Subscription
						</a>
						<audio ref={audioRef} src={soundEffect} id="sound-effect" />
					</div>
				</div>
			</div>

			<div className="GT-page">
				<section className="GT-container">
					<header>Payment Information</header>
					<form className="GT-form">
						<div className="GT-column">
							<div className="GT-input-box">
								<label>Card Type</label>
								<input
									type="text"
									placeholder="Enter card type"
									required
									onChange={(event) => setCardType(event.target.value)}
								/>
							</div>

							<div className="GT-input-box">
								<label>Holder Name</label>
								<input
									type="text"
									placeholder="Enter holder name"
									required
									onChange={(event) => setHolderName(event.target.value)}
								/>
							</div>

							<div className="GT-input-box">
								<label>Expiration Date</label>
								<input
									type="date"
									placeholder="Enter expiration date"
									required
									onChange={(event) => setExpDate(event.target.value)}
								/>
							</div>
						</div>

						<div className="GT-column">
							<div className="GT-input-box">
								<label>Card Number</label>
								<input
									type="number"
									placeholder="0000 0000 0000 0000"
									required
									onChange={(event) => setCardNumber(event.target.value)}
								/>
							</div>
							<div className="GT-input-box">
								<label>CVV</label>
								<input
									type="number"
									placeholder="000"
									required
									onChange={(event) => setCardCVV(event.target.value)}
								/>
							</div>
						</div>
						<div>
							<FormGroup>
								<FormControlLabel
									className="rememberSwitch"
									control={<Switch defaultChecked />}
									label="Remember My Payment Information"
								/>
							</FormGroup>
						</div>
					</form>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default GetTicket;
