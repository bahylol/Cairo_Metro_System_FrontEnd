import './Get_Ticket.css';

const GetTicket = () => {
	return (
		<div className="GT-page">
			<section className="GT-container">
				<header>Login Form</header>
				<form className="GT-form">
					<div className="GT-input-box">
						<label>Email</label>
						<input type="text" placeholder="Enter email" required />
					</div>

					<div className="GT-input-box">
						<label>Password</label>
						<input type="password" placeholder="Enter password" required />
					</div>

					<button>Log in</button>
				</form>
			</section>
		</div>
	);
};

export default GetTicket;
