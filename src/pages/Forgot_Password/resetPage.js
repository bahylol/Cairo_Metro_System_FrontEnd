import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer.js';
import '../Signup-Login/Signup-Login.css';
import { useState } from 'react';

const ResetPage = () => {
	const navigate = useNavigate();
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
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [resetToken, setResetToken] = useState('');

	const handleResetPassword = (event) => {
		event.preventDefault();
		if (password === '' || password2 === '') {
			notify('Please provide your new password');
		} else if (password !== password2) {
			notify('Passwords do not match');
		} else if (resetToken === '') {
			notify('Please provide the Token');
		} else {
			console.log(password);
			console.log(resetToken);
			fetch('http://localhost:3000/api/v1/users/forgot_password/new_password/', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					password: password,
					resetToken: resetToken,
				}),
			})
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data);
					if (data[0] === 200) {
						confirm('Password successfully reset!');
						setTimeout(function () {
							navigate('/');
						}, 2500);
					} else if (data[0] === 400) {
						notify('Token invalid/ expired!');
					} else {
						notify('Could not reset password!');
					}
				})
				.catch((error) => console.log(error.message));
		}
	};

	return (
		<>
			<div className="SL-Page">
				<section className="SL-container">
					<header>Reset Pssword</header>
					<form className="SL-form">
						<div className="SL-input-box">
							<label>New Password</label>
							<input
								type="password"
								placeholder="Enter New Password"
								required
								onChange={(event) => setPassword(event.target.value)}
							/>
							<br /> <br />
							<label>Confirm New Password</label>
							<input
								type="password"
								placeholder="Enter New Password Again"
								required
								onChange={(event) => setPassword2(event.target.value)}
							/>
							<br /> <br />
							<label>Your Token</label>
							<input
								type="text"
								placeholder="Enter Your Token Again"
								required
								onChange={(event) => setResetToken(event.target.value)}
							/>
						</div>

						<button onClick={(e) => handleResetPassword(e)}>Reset Password</button>
					</form>
				</section>
			</div>
			<ToastContainer />
			<Footer />
		</>
	);
};

export default ResetPage;
