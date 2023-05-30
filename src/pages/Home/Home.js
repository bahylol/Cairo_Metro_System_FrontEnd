import './Home.css';
import './style.css';
import image from '../../Assets/HomePageTrain.png';

const Home = () => {
	return (
		<div className="Home">
			<div className="Image">
				<img className="image1" src={image} alt="TRAIN-IMAGE" />
			</div>

			<div className="container">
				<div className="pickup">
					<p>where to go?</p>

					<div className="from-to">
						<input type="text" className="from" placeholder="station / address" />
						<i className="fa-solid fa-arrows-up-down"></i>
						<input type="text" className="to" placeholder="station / address" />
					</div>

					<div className="date">
						<p>date</p>
						<input type="date" />
					</div>

					<a href="htt">purchase</a>
				</div>
			</div>

			<div className="booking-shortcut-div">
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
			</div>

			<div className="upcoming-rides-shortcut-div">
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
			</div>
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
