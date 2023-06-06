import React, { useState } from 'react';
import './Signup-Login.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function RegistrationForm({ setIsLoggedIn, setUserType }) {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
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
	const confirm = (alert) => {
		toast.success(alert, {
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
					confirm('Welcome back, You will be redirected to your home page');
					localStorage.setItem('session_token', data[1]);
					setIsLoggedIn(true);
					setTimeout(function () {
						navigate('/');
					}, 2501);
				}
				else { notify(data[1]); }

			})
			.catch((error) => console.log(error));
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

						<button onClick={handleSubmit}>Log in</button>
					</form>
				</section>
			</div>
			<ToastContainer />
		</>
	);
}

export default RegistrationForm;
