import React, { useState } from 'react';
import './Navbar3.css';

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
					<ul className={`nav-links ${isOpen ? 'open' : ''}`}>
						<li>
							<a href="htt">Home</a>
						</li>
						<li>
							<a href="htt">About</a>
						</li>
						<li>
							<a href="htt">Services</a>
						</li>
						<li>
							<a href="htt">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
