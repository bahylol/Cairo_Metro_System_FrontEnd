import React, { useState } from 'react';
import './Navbar2.css';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="logo-section">
					<a href="htt" className="logo">
						Logo
					</a>
				</div>
				<div className={`menu ${isOpen ? 'open' : ''}`}>
					<div className="hamburger" onClick={toggleMenu}>
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</div>
					<ul className="nav-links">
						<li>
							<a href="htt">Home</a>
						</li>
						<li>
							<a href="htt">Tickets</a>
						</li>
						<li>
							<a href="htt">My Rides</a>
						</li>
						<div className="spacer"></div>
						<li>
							<a href="htt">Log Out</a>
						</li>
						<li>
							<a href="htt">Profile</a>
						</li>
						<li>
							<a href="htt">Settings</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
