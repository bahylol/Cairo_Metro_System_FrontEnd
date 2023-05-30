import React from 'react';
import './Signup-Login.css';

function RegistrationForm() {
	return (
		<section className="container">
			<header>Login Form</header>
			<form action="#" className="form">
				<div className="input-box">
					<label>Email</label>
					<input type="text" placeholder="Enter email" required />
				</div>

				<div className="input-box">
					<label>Password</label>
					<input type="password" placeholder="Enter password" required />
				</div>

				<button>Log in</button>
			</form>
		</section>
	);
}

export default RegistrationForm;
