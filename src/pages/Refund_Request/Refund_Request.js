import './Refund_Request.css';

const Refund_Request = () => {
	return (
		<section className="RRcontainer">
			<header>Login Form</header>
			<form action="#" className="RRform">
				<div className="RRinput-box">
					<label className="labels">Email</label>
					<input type="text" placeholder="Enter email" required />
				</div>

				<div className="RRinput-box">
					<label className="labels">Password</label>
					<input type="password" placeholder="Enter password" required />
				</div>

				<button>Log in</button>
			</form>
		</section>
	);
};

export default Refund_Request;
