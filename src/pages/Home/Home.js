import Footer from '../Footer/Footer.js';
import { Link } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Home.css';
import './style.css';
import './articleCards.css';
import './blogSlider.css';
import { useEffect, useRef, useState } from 'react';
import image from '../../Assets/HomePageTrain.png';
import cardPic1 from '../../Assets/cardPic1.jpg';
import cardPic2 from '../../Assets/cardPic2.png';
import cardPic3 from '../../Assets/cardPic3.jpg';
import cardPic4 from '../../Assets/k_metroo.jpg';
import crowd from '../../Assets/k_metro.jpg';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import './../OurTeam/OurTeam.js';
import joe from '../../Assets/Youssef_Elwy.jpeg';
import osama from '../../Assets/Ahmed_Osama.jpeg';
import yehia from '../../Assets/Ahmed_Yehia.jpeg';
import bahy from '../../Assets/Bahy_Salama.jpeg';
import { useNavigate } from 'react-router-dom';

import Swiper from 'swiper';

const Home = ({ isLoggedIn }) => {
	const navigate = useNavigate();

	const sectionRef = useRef(null);
	const [origin, setOrigin] = useState('');
	const [dest, setDest] = useState('');
	const [journeyTime, setJourneyTime] = useState('');
	let [stations, setStations] = useState([]);

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

	useEffect(() => {
		const getStations = async () => {
			try {
				const response = await fetch('http://localhost:3000/getAll/Stations', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});
				const data = await response.json();
				stations = data.map((item) => item);
				console.log(stations);
				const allStations = stations.map(({ description: label, ...rest }) => ({
					label,
					...rest,
				}));
				setStations(allStations);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		getStations();
	}, []);

	const currentDate = new Date();
	const formattedCurrentDate = currentDate.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	const dateParts = formattedCurrentDate.split(' ');
	const day = parseInt(dateParts[1]);
	const month = dateParts[0];

	const handlePurchase = (e) => {
		if (!isLoggedIn) {
			notify('Please login first!');
			setTimeout(function () {
				navigate('/login');
			}, 2500);
		} else {
			e.preventDefault();
			if (origin === '' || dest === '' || journeyTime === '') {
				notify('Incomplete Journy Information!');
			} else {
				fetch('http://localhost:3000/create-checkout-session-ticket', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						token: `session_token=${localStorage.getItem('session_token')}`,
					},
					body: JSON.stringify({
						origin: origin.label,
						destination: dest.label,
						start_time: journeyTime,
					}),
				})
					.then((response) => response.json())
					.then((data) => {
						if (data[0] === 200) {
							window.location.href = data[1];
						} else {
							notify(data[1]);
						}
					})
					.catch((error) => console.error(error, 'THIS IS A BIGGGG ERROR'));
			}
		}
	};

	const checkPrice = (e) => {
		e.preventDefault();
		if (origin === '' || dest === '') {
			notify('Incomplete Journy Information!');
		} else {
			fetch('http://localhost:3000/api/v1/payment/ticket/checkprice', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					origin: origin.label,
					destination: dest.label,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					if (data[0] === 200) {
						confirm(data[1]);
					} else {
						notify(data[1]);
					}
				})
				.catch((error) => console.error(error, 'THIS IS A BIGGGG ERROR'));
		}
	};

	useEffect(() => {
		const swiper = new Swiper('.blog-slider', {
			spaceBetween: 30,
			effect: 'fade',
			loop: true,
			mousewheel: {
				invert: false,
			},
			pagination: {
				el: '.blog-slider__pagination',
				clickable: true,
			},
		});
	}, []);

	return (
		<>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
					rel="stylesheet"
				/>
			</head>
			<div className="Home">
				{/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
				{/* <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        /> */}
				<link
					rel="stylesheet"
					// href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"

					integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
				/>

				{/* <div>
          <img className="home-train-image" src={image} alt="TRAIN-IMAGE" />
        </div> */}
				{/* --------------------------------------------------------------------------------- */}
				<div className="home-get-ticket-container" ref={sectionRef} style={{ height: '40vh' }}>
					<div className="home-pickup">
						<p
							onClick={() =>
								sectionRef.current.scrollIntoView({
									behavior: 'smooth',
								})
							}
						>
							Where do you want to go?
						</p>

						<div className="home-from-to">
							<Autocomplete
								disablePortal
								className="GTBoxFrom"
								options={stations}
								value={origin}
								onChange={(event, newValue) => {
									setOrigin(newValue);
								}}
								renderInput={(params) => <TextField {...params} label="Origin" />}
							/>
							<i className="fa-solid fa-arrows-up-down"></i>
							<Autocomplete
								disablePortal
								className="GTBoxFrom"
								options={stations}
								value={dest}
								onChange={(event, newValue) => {
									setDest(newValue);
								}}
								renderInput={(params) => <TextField {...params} label="Destination" />}
							/>
							<LocalOfferIcon className="priceIcon" onClick={checkPrice} />
						</div>

						<div className="home-date">
							<p>Choose Date</p>
							<input
								type="datetime-local"
								required
								onChange={(event) => setJourneyTime(event.target.value)}
							/>
						</div>

						<a href="/login" onClick={(e) => handlePurchase(e)}>
							Book Ticket
						</a>
					</div>
				</div>

				{/* --------------------------------------------------------------------------------- */}
				<div className="container mt-5">
					<div className="row">
						<div className="col-12">
							<article className="blog-card">
								<div className="blog-card__background">
									<div className="card__background--wrapper">
										<div
											className="card__background--main"
											style={{ backgroundImage: `url(${crowd})` }}
										>
											<div className="card__background--layer"></div>
										</div>
									</div>
								</div>
								<div className="blog-card__head">
									<span className="date__box">
										<span className="date__day">{day}</span>
										<span className="date__month">{month}</span>
									</span>
								</div>
								<div className="blog-card__info">
									<h3>BECOME PART OF OUR AMAZING COMMUNITY TODAY</h3>
									<p>
										<a href="#" className="icon-link mr-3">
											<i className="fa fa-pencil-square-o"></i> JOIN
										</a>
										<a href="#" className="icon-link">
											<span className="larger-letter"> R</span>
											ETRO
											<span className="larger-letter">M</span>
											ETRO
										</a>
									</p>
									<p>
										SIGN UP NOW for a seamless metro experience. Join us and enjoy
										convenience, personalized recommendations, and exclusive benefits.
										Start your journey today!
									</p>
									<a href="#" className="btn btn--with-icon">
										<i className="btn-icon fa fa-long-arrow-right"></i>
										<Link to="/signup" className="btn-text">
											SIGN UP
										</Link>
									</a>
								</div>
							</article>
						</div>
					</div>
				</div>
				{/* --------------------------------------------------------------------------------- */}

				<div className="projcard-container">
					<div
						className="projcard projcard-blue"
						// style={{ marginLeft: "60px" }}
					>
						<div className="projcard-innerbox">
							<img className="projcard-img responsive-img" src={cardPic1} />
							<div className="projcard-textbox">
								<div className="projcard-title">Book Your Metro Tickets</div>
								<div className="projcard-subtitle">Convenient and Hassle-Free Travel</div>
								<div className="projcard-bar"></div>
								<div className="projcard-description">
									Experience seamless and efficient travel with our easy-to-use online
									booking system. Skip the long queues and effortlessly reserve your metro
									tickets from the comfort of your home or on the go.
								</div>
								<div className="projcard-tagbox">
									<span className="projcard-tag">Fast Booking</span>
									<span className="projcard-tag">Secure Payments</span>
								</div>
							</div>
						</div>
					</div>

					<div
						className="projcard projcard-red"
						// style={{ marginLeft: "-60px" }}
					>
						<div className="projcard-innerbox">
							<img className="projcard-img responsive-img" src={cardPic2} />
							<div className="projcard-textbox">
								<div className="projcard-title">Manage Your Rides</div>
								<div className="projcard-subtitle">Track, Modify, and Refund</div>
								<div className="projcard-bar"></div>
								<div className="projcard-description">
									Stay in control of your metro rides with our user-friendly ride
									management tools. Easily track your journey history, make modifications
									if needed, and enjoy the flexibility of refund options when necessary.
								</div>
								<div className="projcard-tagbox">
									<span className="projcard-tag">Ride History</span>
									<span className="projcard-tag">Flexibility</span>
									<span className="projcard-tag">Reliability</span>
								</div>
							</div>
						</div>
					</div>

					<div
						className="projcard projcard-green"
						// style={{ marginLeft: "60px" }}
					>
						<div className="projcard-innerbox">
							<img className="projcard-img responsive-img" src={cardPic3} />
							<div className="projcard-textbox">
								<div className="projcard-title">Subscribe for Seamless Travel</div>
								<div className="projcard-subtitle">Unlock Exclusive Benefits</div>
								<div className="projcard-bar"></div>
								<div className="projcard-description">
									Upgrade your metro travel experience with our subscription plans. Enjoy
									unlimited rides, priority access, and exclusive perks. Choose from
									monthly, quarterly, or annual subscriptions tailored to suit your needs.
								</div>
								<div className="projcard-tagbox">
									<span className="projcard-tag">Unlimited Rides</span>
									<span className="projcard-tag">Priority Access</span>
								</div>
							</div>
						</div>
					</div>

					<div
						className="projcard projcard-customcolor"
						// style={{ marginLeft: "-60px" }}
					>
						<div className="projcard-innerbox">
							<img className="projcard-img responsive-img" src={cardPic4} />
							<div className="projcard-textbox">
								<div className="projcard-title">Discover Metro Trivia</div>
								<div className="projcard-subtitle">Fun and Fascinating Facts</div>
								<div className="projcard-bar"></div>
								<div className="projcard-description">
									Did you know that the first metro system was established in London in
									1863? Explore interesting facts and trivia about metro systems worldwide.
									From historic milestones to technological advancements, uncover the
									wonders of metro transportation.
								</div>
								<div className="projcard-tagbox">
									<span className="projcard-tag">Historic Milestones</span>
									<span className="projcard-tag">Technological Advancements</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* --------------------------------------------------------------------------------- */}
			</div>
			<section class="team-section">
				<div class="team-row">
					<h1 id="team-h1">Our Team</h1>
				</div>
				<div class="team-row">
					<div class="team-column">
						<div class="team-card">
							<div class="team-img-container">
								<img src={osama} />
							</div>
							<h3>Ahmed Osama</h3>
							<p>Software Engineer</p>
							<div class="team-icons">
								<a href="https://www.linkedin.com/in/ahmedosamadiab" target="_blank">
									<i class="fab fa-linkedin"></i>
								</a>
								<a href="https://github.com/AhmedOsamaAli" target="_blank">
									<i class="fab fa-github"></i>
								</a>
								<a href="mailto:ahmedosamadiab@gmail.com" target="_blank">
									<i class="fas fa-envelope"></i>
								</a>
							</div>
						</div>
					</div>
					<div class="team-column">
						<div class="team-card">
							<div class="team-img-container">
								<img src={yehia} />
							</div>
							<h3>Ahmed Yehia</h3>
							<p>Software Engineer</p>
							<div class="team-icons">
								<a href="https://www.linkedin.com/in/ahmed-yehia-155629206" target="_blank">
									<i class="fab fa-linkedin"></i>
								</a>
								<a href="https://github.com/AhmedHosny2" target="_blank">
									<i class="fab fa-github"></i>
								</a>
								<a href="mailto:Ahmed.hosny4434@gmail.com" target="_blank">
									<i class="fas fa-envelope"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="team-row">
					<div class="team-column">
						<div class="team-card">
							<div class="team-img-container">
								<img src={bahy} />
							</div>
							<h3>Bahy Salama</h3>
							<p>Software Engineer</p>
							<div class="team-icons">
								<a href="https://www.linkedin.com/in/bahy-salama/" target="_blank">
									<i class="fab fa-linkedin"></i>
								</a>
								<a href="https://github.com/bahylol" target="_blank">
									<i class="fab fa-github"></i>
								</a>
								<a href="mailto:bahymohamed2010@gmail.com" target="_blank">
									<i class="fas fa-envelope"></i>
								</a>
							</div>
						</div>
					</div>
					<div class="team-column">
						<div class="team-card">
							<div class="team-img-container">
								<img src={joe} />
							</div>
							<h3>Youssef Elwy</h3>
							<p>Software Engineer</p>
							<div class="team-icons">
								<a
									href="https://www.linkedin.com/in/youssef-elwy-427682268"
									target="_blank"
								>
									<i class="fab fa-linkedin"></i>
								</a>
								<a href="https://github.com/youfiElwy" target="_blank">
									<i class="fab fa-github"></i>
								</a>
								<a href="mailto:youssef47009@gmail.com" target="_blank">
									<i class="fas fa-envelope"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ToastContainer />
			<Footer />
		</>
	);
};

export default Home;
