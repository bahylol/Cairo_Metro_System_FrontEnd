import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer.js';
import '../Signup-Login/Signup-Login.css';
import { useState } from 'react';

const ForgotPassword = () => {
	const [phase1, setPhase1] = useState(false);

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
	const [email, setEmail] = useState('');
	const [resetToken, setResetToken] = useState('');

	const handleSendEmail = (event) => {
		event.preventDefault();
		if (email === '') {
			notify('Please provide a valid email');
		}
		fetch('http://localhost:3000/api/v1/users/forgot_password', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data[0] === 200) {
					confirm('Email successfully sent!');
					setTimeout(2500);
					setPhase1(true);
				} else if (data[0] === 401) {
					notify('This user does not exist!');
				} else {
					notify('Could not send email!');
				}
			})
			.catch((error) => console.error(error, 'THIS IS A BIGGGG ERROR'));
	};
	const handleSendResetToken = (event) => {
		event.preventDefault();
		if (email === '') {
			notify('Please provide a valid email');
		} else if (resetToken === '') {
			notify('Please provide the reset token');
		} else {
			fetch(`http://localhost:3000/api/v1/users/forgot_password/verify?token=${resetToken}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					if (data[0] === 200) {
						confirm('Email successfully sent!');
						setTimeout(2500);
					} else if (data[0] === 400) {
						notify('Invalid or expired password reset link');
					} else {
						notify('Could not send email!');
					}
				})
				.catch((error) => notify(error.message));
		}
	};

	return (
		<>
			<div className="SL-Page">
				<section className="SL-container">
					<header>Verification Form</header>
					<form className="SL-form">
						<div className="SL-input-box">
							<label>Email</label>
							<input
								type="text"
								placeholder="Enter email"
								required
								onChange={(event) => setEmail(event.target.value)}
							/>
							<br /> <br />
							{phase1 && (
								<div>
									<label>Reset Token</label>
									<input
										type="text"
										placeholder="Enter Reset Token"
										required
										onChange={(event) => setResetToken(event.target.value)}
									/>
								</div>
							)}
						</div>

						{!phase1 && (
							<button onClick={(e) => handleSendEmail(e)}>Send Verification Email</button>
						)}
						{phase1 && (
							<button onClick={(e) => handleSendResetToken(e)}>Send Reset Page</button>
						)}
					</form>
				</section>
			</div>
			<ToastContainer />
			<Footer />
		</>
	);
};

export default ForgotPassword;
