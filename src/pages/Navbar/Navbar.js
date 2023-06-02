import React, { useState } from 'react';
import './Navbar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar">
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
				integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
				crossorigin="anonymous"
				referrerpolicy="no-referrer"
			/>

			<div className="navbar-container">
				<div className="navbar-logo-section">
					<a href="htt" className="navbar-logo">
						Logo
					</a>
				</div>
				<div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
					<div className="navbar-hamburger-menu" onClick={toggleMenu}>
						<span className="navbar-line"></span>
						<span className="navbar-line"></span>
						<span className="navbar-line"></span>
					</div>
					<ul className="navbar-nav-links">
						<li>
							<a href="htt">Home</a>
						</li>
						<li>
							<a href="htt">Tickets</a>
						</li>
						<li>
							<a href="htt">My Rides</a>
						</li>
						<div className="navbar-spacer"></div>
						<li className="navbar-login-out-ID">
							<a href="htt" className="navbar-login-out-text-ID no-hover-animation">
								Log In
							</a>
						</li>
						<li>
							<a href="htt" className="special-link signUpLink">
								Sign Up
							</a>
						</li>
						<li>
							<a href="htt" className="special-link">
								<AccountCircleIcon className="profileIcon" />
							</a>
						</li>
						<li>
							<a href="htt" className="special-link">
								<SettingsIcon className="settingsIcon" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
