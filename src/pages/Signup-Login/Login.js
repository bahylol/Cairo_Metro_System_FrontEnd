import React, { useState } from 'react';
import './Signup-Login.css';

function RegistrationForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault();
		if(email===""){
			alert("Please Enter Your Email");
			return;
		}
		if(password===""){
			alert("Please Enter Your Password");
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
			.then((data) => console.log(data))
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
