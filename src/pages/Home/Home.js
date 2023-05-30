import './Home.css';
import './style.css';
import image from '../../Assets/HomePageTrain.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer.js';

const Home = () => {
	return (
		<div className="Home">
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
				rel="stylesheet"
			/>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
				integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
				crossorigin="anonymous"
				referrerpolicy="no-referrer"
			/>

			<div className="Image">
				<img className="image1" src={image} alt="TRAIN-IMAGE" />
			</div>

			<div className="container" style={{ height: '10vh' }}>
				<div className="pickup">
					<p>Where do you want to go?</p>

					<div className="from-to">
						<input type="text" className="from" placeholder="Station / stop / address" />
						<i className="fa-solid fa-arrows-up-down"></i>
						{/* <i className="fa-solid fa-arrows-minimize"></i> */}
						{/* <FontAwesomeIcon icon="fa-solid fa-arrow-up-arrow-down" rotation={90} /> */}
						{/* <i className="fa-solid fa-arrow-up-arrow-down fa-rotate-90 fa-2xs"></i> */}
						<input type="text" className="to" placeholder="Station / stop / address" />
					</div>

					<div className="date">
						<p>Outbound journey</p>
						<input type="datetime-local" />
					</div>

					<a href="htt">Get Ticket</a>
				</div>
			</div>

			{/* <div className="booking-shortcut-div">
				<section className="home-container">
					<form action="#" className="home-form">
						<div className="column">
							<div className="home-input-box">
								<label>Origin</label>
								<input type="text" placeholder="Enter origin" required />
							</div>

							<div className="home-input-box">
								<label>Destination</label>
								<input type="text" placeholder="Enter destination" required />
							</div>
						</div>

						<button>Log in</button>
					</form>
				</section>
			</div> */}

			{/* <div className="upcoming-rides-shortcut-div">
				<section className="home-container">
					<header>Your Upcoming Rides</header>
					<form action="#" className="home-form">
						<div className="column">
							<div className="home-input-box">
								<label>Origin</label>
							</div>
							<div className="home-input-box">
								<label>Destination</label>
							</div>
						</div>

						<button>Log in</button>
					</form>
				</section>
			</div> */}

			{/* <Footer /> */}
		</div>
	);
};

// const Home = () => {
// 	return (
// 		<div className="container">
// 			<div className="pickup">
// 				<p>where to go?</p>

// 				<div className="from-to">
// 					<input type="text" className="from" placeholder="station / address" />
// 					<i className="fa-solid fa-arrows-up-down"></i>
// 					<input type="text" className="to" placeholder="station / address" />
// 				</div>

// 				<div className="date">
// 					<p>date</p>
// 					<input type="date" />
// 				</div>

// 				<a href="htt">purchase</a>
// 			</div>
// 		</div>
// 	);
// };

export default Home;
