import React, { useState } from 'react';
import './Signup-Login.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer.js';

function RegistrationForm({ setIsLoggedIn, setUserType }) {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
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
	const handleSubmit = (event) => {
		event.preventDefault();
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
				if (data[0] === 200) {
					// confirm('Welcome back, You will be redirected to your home page');
					// localStorage.setItem('session_token', data[1]);
					// setIsLoggedIn(true);
					// setTimeout(function () {
					// 	navigate('/');
					// }, 2501);

					localStorage.setItem('session_token', data[1]);

					if (data[0] === 200) {
						let userType = 'user';
						const fetchData = async () => {
							try {
								const response = await fetch('http://localhost:3000/get_cur_user', {
									method: 'GET',
									headers: {
										'Content-Type': 'application/json',
										token: `session_token=${localStorage.getItem('session_token')}`,
									},
								});
								const data = await response.json();
								console.log(data.userrole);
								userType = data.userrole;
							} catch (error) {
								console.error('Error fetching data:', error);
							}
							confirm('Welcome back, You will be redirected to your home page');
							localStorage.setItem('session_token', data[1]);

							setTimeout(function () {
								setIsLoggedIn(true);
								setUserType(userType);
								navigate('/');
							}, 2501);
						};
						fetchData();
					}
				} else {
					notify(data[1]);
				}

				// localStorage.setItem('session_token', data[1]);

				// setIsLoggedIn(true);
				// if (data[0] === 200) {
				// 	const fetchData = async () => {
				// 		try {
				// 			const response = await fetch('http://localhost:3000/get_cur_user', {
				// 				method: 'GET',
				// 				headers: {
				// 					'Content-Type': 'application/json',
				// 					token: `session_token=${localStorage.getItem('session_token')}`,
				// 				},
				// 			});
				// 			const data = await response.json();
				// 			console.log(data.userrole);
				// 			setUserType(data.userrole);
				// 		} catch (error) {
				// 			console.error('Error fetching data:', error);
				// 		}
				// 	};
				// 	fetchData();
				// 	navigate('/');
				// }
			});
		// 			.catch((error) => console.log(error));
	};

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};
	const handlePassword = (event) => {
		setPassword(event.target.value);
	};
	return (
		<>
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
						<a
							href="http://localhost:5000/user/forgot-password"
							className="forgotPasswordLink"
						>
							forgot password
						</a>

						<button onClick={handleSubmit}>Log in</button>
					</form>
				</section>
			</div>
			<ToastContainer />
			<Footer />
		</>
	);
}

export default RegistrationForm;
