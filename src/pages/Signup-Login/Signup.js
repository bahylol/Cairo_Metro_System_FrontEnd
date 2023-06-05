import Footer from '../Footer/Footer.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Signup-Login.css';

function RegistrationForm() {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		date: '',
		phone: '',
		ssn: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const [gender, setGender] = useState('');

	const handleRadio = (event) => {
		setGender(event.target.value);
		console.log(setGender);
	};
	const notify = (alert) => {
		toast.error(alert, {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	};
	const confirm = () => {
		toast.success('Your account has been created succesfully you will be redirected to the login page', {
			position: "top-center",
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			});
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		const someNull = Object.values(user).some((x) => x === '');
		if (someNull === true) {
			let nullKeys = '';
			Object.entries(user)
				.filter(([k, v]) => v === '')
				.forEach(([k]) => (nullKeys += `${k} `));
			notify(`Please fill the following data : ${nullKeys}`);
			return;
		}
		if (gender === '') {
			notify("please fill the gender");
			return;
		}
		if (user.password !== user.confirmPassword) {
			notify("passwords don't match");
			return;
		}
		fetch('http://localhost:3000/api/v1/users/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: user.username,
				email: user.email,
				password: user.password,
				birthdate: user.date,
				gender: gender,
				phone: user.phone,
				ssn: user.ssn,
				usertype: 'normal',
				userrole: 'user',
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data[0] === 200) {
					confirm();
					setTimeout(function() {
						navigate('/login');
					  }, 2501);				}
				else { notify(data[1]); }

			})
			.catch((error) => console.error(error));
	};

	return (
		<>
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
								<input
									type="text"
									placeholder="Enter Username"
									name="username"
									value={user.username}
									onChange={handleChange}
									required
								/>
							</div>
						</div>

						<div className="SL-input-box">
							<label>Email Address</label>
							<input
								type="text"
								placeholder="Enter email address"
								name="email"
								value={user.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="SL-input-box">
							<label>Password</label>
							<input
								type="password"
								placeholder="Enter password"
								name="password"
								value={user.password}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="SL-input-box">
							<label>Confirm Password</label>
							<input
								type="password"
								placeholder="Enter password again"
								name="confirmPassword"
								value={user.confirmPassword}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="SL-column">
							<div className="SL-input-box">
								<label>Phone Number</label>
								<input
									type="number"
									placeholder="Enter phone number"
									name="phone"
									value={user.phone}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="SL-input-box">
								<label>Birth Date</label>
								<input
									type="date"
									placeholder="Enter birth date"
									name="date"
									value={user.date}
									onChange={handleChange}
									required
								/>
							</div>
						</div>

						<div className="SL-gender-box">
							<h3>Gender</h3>
							<div className="SL-gender-option">
								<div className="SL-gender">
									<input
										type="radio"
										id="check-male"
										name="gender"
										value="M"
										checked={gender === 'M'}
										onChange={handleRadio}
									/>
									<label htmlFor="check-male">Male</label>
								</div>
								<div className="SL-gender">
									<input
										type="radio"
										id="check-female"
										name="gender"
										value="F"
										checked={gender === 'F'}
										onChange={handleRadio}
									/>
									<label htmlFor="check-female">Female</label>
								</div>
								<div className="SL-gender">
									<input
										type="radio"
										id="check-other"
										name="gender"
										value="P"
										checked={gender === 'P'}
										onChange={handleRadio}
									/>
									<label htmlFor="check-other">prefer not to say</label>
								</div>
							</div>
						</div>

						<div className="SL-input-box">
							<label>Social Secuirty Number</label>
							<input
								type="number"
								placeholder="Enter SSN"
								name="ssn"
								value={user.ssn}
								onChange={handleChange}
								required
							/>
						</div>

						<button onClick={handleSubmit}>Sign up</button>
					</form>
				</section>
			</div>
			<Footer />
			<ToastContainer />
		</>
	);
}

export default RegistrationForm;
