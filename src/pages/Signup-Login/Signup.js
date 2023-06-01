import React from 'react';
import './Signup-Login.css';

function RegistrationForm() {
	return (
		<div className="SL-Page">
			<section className="SL-container">
				<header>Signup Form</header>

				<form action="#" className="SL-form">
					<div className="SL-column">
						<div className="SL-input-box">
							<label>Full Name</label>
							<input type="text" placeholder="Enter full name" required />
						</div>

						<div className="SL-input-box">
							<label>Username</label>
							<input type="text" placeholder="Enter Username" required />
						</div>
					</div>

					<div className="SL-input-box">
						<label>Email Address</label>
						<input type="text" placeholder="Enter email address" required />
					</div>

					<div className="SL-input-box">
						<label>Password</label>
						<input type="password" placeholder="Enter password" required />
					</div>

					<div className="SL-input-box">
						<label>Confirm Password</label>
						<input type="password" placeholder="Enter password again" required />
					</div>

					<div className="SL-column">
						<div className="SL-input-box">
							<label>Phone Number</label>
							<input type="number" placeholder="Enter phone number" required />
						</div>
						<div className="SL-input-box">
							<label>Birth Date</label>
							<input type="date" placeholder="Enter birth date" required />
						</div>
					</div>

					<div className="SL-gender-box">
						<h3>Gender</h3>
						<div className="SL-gender-option">
							<div className="SL-gender">
								<input type="radio" id="check-male" name="gender" defaultChecked />
								<label htmlFor="check-male">Male</label>
							</div>
							<div className="SL-gender">
								<input type="radio" id="check-female" name="gender" />
								<label htmlFor="check-female">Female</label>
							</div>
							<div className="SL-gender">
								<input type="radio" id="check-other" name="gender" />
								<label htmlFor="check-other">prefer not to say</label>
							</div>
						</div>
					</div>

					<div className="SL-input-box">
						<label>Social Secuirty Number</label>
						<input type="text" placeholder="Enter SSN" required />
					</div>

					<button>Sign up</button>
				</form>
			</section>
		</div>
	);
}

export default RegistrationForm;
