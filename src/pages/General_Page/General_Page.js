import Footer from '../Footer/Footer.js';

import './General_Page.css';

const GetTicket = () => {
	return (
		<>
			<div className="general-GP-page">
				<section className="general-GP-container">
					<header>General Page Header</header>
					<form className="general-GP-form">
						<div className="general-GP-input-box">
							<label>Email</label>
							<input type="text" placeholder="Enter email" required />
						</div>

						<div className="general-GP-input-box">
							<label>Password</label>
							<input type="password" placeholder="Enter password" required />
						</div>

						<div className="general-GP-column">
							<div className="general-GP-input-box">
								<label>Full Name</label>
								<input type="text" placeholder="Enter full name" required />
							</div>

							<div className="general-GP-input-box">
								<label>Username</label>
								<input type="text" placeholder="Enter Username" required />
							</div>
						</div>
						<div className="general-GP-column">
							<div className="general-GP-input-box">
								<label>Full Name</label>
								<input type="text" placeholder="Enter full name" required />
							</div>

							<button className="general-GP-side-button">Side Column Button</button>
						</div>

						<button>General Button</button>
					</form>
				</section>

				<section className="general-GP-container">
					<header>General Page Header</header>
					<form className="general-GP-form">
						<div className="general-GP-input-box">
							<label>Email</label>
							<input type="text" placeholder="Enter email" required />
						</div>

						<div className="general-GP-input-box">
							<label>Password</label>
							<input type="password" placeholder="Enter password" required />
						</div>

						<div className="general-GP-column">
							<div className="general-GP-input-box">
								<label>Full Name</label>
								<input type="text" placeholder="Enter full name" required />
							</div>

							<div className="general-GP-input-box">
								<label>Username</label>
								<input type="text" placeholder="Enter Username" required />
							</div>
						</div>
						<div className="general-GP-column">
							<div className="general-GP-input-box">
								<label>Full Name</label>
								<input type="text" placeholder="Enter full name" required />
							</div>

							<button className="general-GP-side-button">Side Column Button</button>
						</div>

						<button>General Button</button>
					</form>
				</section>
				<Footer />
			</div>
		</>
	);
};

export default GetTicket;
