import React, { useState } from 'react';
import './Signup-Login.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function RegistrationForm() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault();
		if (email === '') {
			alert('Please Enter Your Email');
			return;
		}
		if (password === '') {
			alert('Please Enter Your Password');
			return;
		}
		fetch('http://localhost:3000/api/v1/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			// .then(response => {
			// 	console.log(response);
			// 	console.log(response.headers.Cookies);
			// 	console.log(response.headers.Cookie);
			// 	console.log(response.headers.cookies);
			// 	console.log(response.headers.cookie);
			// 	console.log(response.headers.token);
			// 	console.log(response.headers.session_token);
			// 	console.log(response.headers.getSetCookie);
			// 	console.log(response.headers.session_cookie);
			// 	console.log(response.Cookies);
			// 	console.log(response.Cookie);
			// 	console.log(response.cookies);
			// 	console.log(response.cookie);
			// 	console.log(response.token);
			// 	console.log(response.session_token);
			// 	console.log(response.getSetCookie);
			// 	console.log(response.session_cookie);
			// 	console.log(Cookies.get("session_token"));
			// 	console.log(Cookies.get("token"));
			// 	console.log(Cookies.get("Cookies"));
			// 	console.log(Cookies.get("Cookie"));
			// 	console.log(Cookies.get("cookies"));
			// 	console.log(Cookies.get("cookie"));
			// 	console.log(Cookies.get("getSetCookie"));
			// 	console.log(Cookies.get("session_cookie"));
			// 	console.log(Cookies.get());
			// 	localStorage.setItem("session_token",response);
			// 	// if (response.status === 200)
			// 	// 	navigate("/test");
			// })
			.then((response) => response.json())
			.then((data) => {
				localStorage.setItem('session_token', data[0]);
				if (data[1] === 200) navigate('/test');
			})
			.catch((error) => console.error(error));
	};

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};
	const handlePassword = (event) => {
		setPassword(event.target.value);
	};
	return (
		<div className="SL-Page">
			<section className="SL-container">
				<header>Login Form</header>
				<form className="SL-form">
					<div className="SL-input-box">
						<label>Email</label>
						<input
							type="text"
							placeholder="Enter email"
							value={email}
							onChange={handleEmail}
							required
						/>
					</div>

					<div className="SL-input-box">
						<label>Password</label>
						<input
							type="password"
							placeholder="Enter password"
							value={password}
							onChange={handlePassword}
							required
						/>
					</div>

					<button onClick={handleSubmit}>Log in</button>
				</form>
			</section>
		</div>
	);
}

export default RegistrationForm;
