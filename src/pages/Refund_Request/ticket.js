import './ticket.css';

const Ticket = (props) => {
	const tickets = props.tickets;

	return (
		<div>
			{tickets.map((ticket) => (
				<div className="box" key={ticket.ticket_id}>
					<ul className="left">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>

					<ul className="right">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<div className="ticket">
						<span className="airline">{ticket.ticket_id}</span>
						<span className="airline airlineslip">Lufthansa</span>
						<span className="boarding">Boarding pass</span>
						<div className="content">
							<span className="jfk">JFK</span>
							<span className="plane">
								<svg
									clip-rule="evenodd"
									fill-rule="evenodd"
									height="60"
									width="60"
									image-rendering="optimizeQuality"
									shape-rendering="geometricPrecision"
									text-rendering="geometricPrecision"
									viewBox="0 0 500 500"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g stroke="#222">
										<line
											fill="none"
											stroke-linecap="round"
											stroke-width="30"
											x1="300"
											x2="55"
											y1="390"
											y2="390"
										/>
										<path
											d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
											fill="#222"
											stroke-linejoin="round"
											stroke-width="10"
										/>
									</g>
								</svg>
							</span>
							<span className="sfo">SFO</span>

							<span className="jfk jfkslip">JFK</span>
							<span className="plane planeslip">
								<svg
									clip-rule="evenodd"
									fill-rule="evenodd"
									height="50"
									width="50"
									image-rendering="optimizeQuality"
									shape-rendering="geometricPrecision"
									text-rendering="geometricPrecision"
									viewBox="0 0 500 500"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g stroke="#222">
										<line
											fill="none"
											stroke-linecap="round"
											stroke-width="30"
											x1="300"
											x2="55"
											y1="390"
											y2="390"
										/>
										<path
											d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
											fill="#222"
											stroke-linejoin="round"
											stroke-width="10"
										/>
									</g>
								</svg>
							</span>
							<span className="sfo sfoslip">SFO</span>
							<div className="sub-content">
								<span className="watermark">Lufthansa</span>
								<span className="name">
									PASSENGER NAME
									<br />
									<span>Rex, Anonasaurus</span>
								</span>
								<span className="flight">
									FLIGHT N&deg;
									<br />
									<span>X3-65C3</span>
								</span>
								<span className="gate">
									GATE
									<br />
									<span>11B</span>
								</span>
								<span className="seat">
									SEAT
									<br />
									<span>45A</span>
								</span>
								<span className="boardingtime">
									BOARDING TIME
									<br />
									<span>8:25PM ON AUGUST 2013</span>
								</span>

								<span className="flight flightslip">
									FLIGHT N&deg;
									<br />
									<span>X3-65C3</span>
								</span>
								<span className="seat seatslip">
									SEAT
									<br />
									<span>45A</span>
								</span>
								<span className="name nameslip">
									PASSENGER NAME
									<br />
									<span>Rex, Anonasaurus</span>
								</span>
							</div>
						</div>
						<div className="barcode"></div>
						<div className="barcode slip"></div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Ticket;
