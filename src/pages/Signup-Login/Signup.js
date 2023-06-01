import React, { useState } from 'react';
import './Signup-Login.css';

function RegistrationForm() {
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
		date: "",
		phone: "",
		ssn: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		console.log(name);
		console.log(value);
		setUser(prevState => ({
			...prevState,
			[name]: value
		}));
	}
	const [gender, setGender] = useState("");

	const handleRadio = (event) => {
		setGender(event.target.value);
		console.log(setGender);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if(user.password !==user.confirmPassword){
			alert("passwords don't match");
			return;
		}
		fetch('http://localhost:3000/api/v1/users/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"username": user.username,
				"email": user.email,
				"password": user.password,
				"birthdate": user.date,
				"gender": gender,
				"phone": user.phone,
				"ssn": user.ssn,
				"usertype": "normal",
				"userrole": "user"
			})
		})
			.then(data => console.log(data))
			.catch(error => console.error(error))
	};


	return (
		<section className="container">
			<header>Signup Form</header>
			<form action="#" className="form">

				<div className="column">
					<div className="input-box">
						<label>Full Name</label>
						<input type="text" placeholder="Enter full name" required />
					</div>

					<div className="input-box">
						<label>Username</label>
						<input type="text" placeholder="Enter Username" name="username" value={user.username} onChange={handleChange} required />
					</div>
				</div>

				<div className="input-box">
					<label>Email Address</label>
					<input type="text" placeholder="Enter email address" name="email" value={user.email} onChange={handleChange} required />
				</div>

				<div className="input-box">
					<label>Password</label>
					<input type="password" placeholder="Enter password" name="password" value={user.password} onChange={handleChange} required />
				</div>

				<div className="input-box">
					<label>Confirm Password</label>
					<input type="password" placeholder="Enter password again" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required />
				</div>

				<div className="column">
					<div className="input-box">
						<label>Phone Number</label>
						<input type="number" placeholder="Enter phone number" name="phone" value={user.phone} onChange={handleChange} required />
					</div>
					<div className="input-box">
						<label>Birth Date</label>
						<input type="date" placeholder="Enter birth date" name="date" value={user.date} onChange={handleChange} required />
					</div>
				</div>

				<div className="gender-box">
					<h3>Gender</h3>
					<div className="gender-option">
						<div className="gender">
							<input type="radio" id="check-male" name="gender"
								value="M"
								checked={gender === "M"}
								onChange={handleRadio} />
							<label htmlFor="check-male">Male</label>
						</div>
						<div className="gender">
							<input type="radio" id="check-female" name="gender"
								value="F"
								checked={gender === "F"}
								onChange={handleRadio} />
							<label htmlFor="check-female">Female</label>
						</div>
						<div className="gender">
							<input type="radio" id="check-other" name="gender"
								value="P"
								checked={gender === "P"}
								onChange={handleRadio} />
							<label htmlFor="check-other">prefer not to say</label>
						</div>
					</div>
				</div>

				<div className="input-box">
					<label>Social Secuirty Number</label>
					<input type="number" placeholder="Enter SSN" name="ssn" value={user.ssn} onChange={handleChange} required />
				</div>

				<button onClick={handleSubmit}>Sign up</button>
			</form>
		</section>
	);
}

export default RegistrationForm;
