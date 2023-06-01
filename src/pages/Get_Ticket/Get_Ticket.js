import './Get_Ticket.css';

const GetTicket = () => {
	return (
		<>
			<div className="Get-Ticket-Whole-Page">
				<div className="GTSection1">
					<div className="GTBoxPickup">
						<p>Where do you want to go?</p>

						<div className="GTBoxFromTo">
							<input
								type="text"
								className="GTBoxFrom"
								placeholder="Station / stop / address"
							/>
							<i className="fa-solid fa-arrows-up-down"></i>
							{/* <i className="fa-solid fa-arrows-minimize"></i> */}
							{/* <FontAwesomeIcon icon="fa-solid fa-arrow-up-arrow-down" rotation={90} /> */}
							{/* <i className="fa-solid fa-arrow-up-arrow-down fa-rotate-90 fa-2xs"></i> */}
							<input
								type="text"
								className="GTBoxFrom"
								placeholder="Station / stop / address"
							/>
						</div>

						<div className="GTBoxDate">
							<p>Outbound journey</p>
							<input type="datetime-local" />
						</div>

						<a href="htt">Purchase Ticket</a>
						<a href="htt">Use Subscription</a>
					</div>
				</div>
			</div>

			<div className="GT-page">
				<section className="GT-container">
					<header>Payment Information</header>
					<form className="GT-form">
						<div className="GT-column">
							<div className="GT-input-box">
								<label>Card Type</label>
								<input type="text" placeholder="Enter card type" required />
							</div>

							<div className="GT-input-box">
								<label>Holder Name</label>
								<input type="text" placeholder="Enter holder name" required />
							</div>

							<div className="GT-input-box">
								<label>Expiration Date</label>
								<input type="date" placeholder="Enter expiration date" required />
							</div>
						</div>

						<div className="GT-column">
							<div className="GT-input-box">
								<label>Card Number</label>
								<input type="text" placeholder="Enter card number" required />
							</div>
						</div>
					</form>
				</section>
			</div>
		</>
	);
};

export default GetTicket;
