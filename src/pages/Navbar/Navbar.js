import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Navbar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddHomeIcon from '@mui/icons-material/AddHome';
import TrainIcon from '@mui/icons-material/Train';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import DirectionsSubwayFilledIcon from '@mui/icons-material/DirectionsSubwayFilled';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import logo from '../../Assets/logo.png';

const Navbar = ({ isLoggedIn, setIsLoggedIn, userType, setUserType }) => {
	const navigate = useNavigate();
	// const menuItems = [
	// 	{ text: 'Log In', path: '/login' },
	// 	{ text: 'Sign Up', path: '/signup' },
	// 	{ text: 'Settings', path: '/' },
	// ];

	// const secondaryMenuItems = [
	// 	{ text: 'Profile', path: '/Dashboard/Profile' },
	// 	{ text: 'My Tickets', path: '/tickets' },
	// 	{ text: 'Get Ticket', path: '/tickets/purchase' },
	// 	{ text: 'Subscriptions', path: '/subscription' },
	// 	{ text: 'Start Ride', path: '/simulateRide__' },
	// ];

	const [navSublinks, setNavSublinks] = useState([]);

	const handleMouseEnterNavbarLink = (index) => {
		const updatedSublinks = [...navSublinks];
		updatedSublinks[index] = true;
		setNavSublinks(updatedSublinks);
	};

	const handleMouseLeaveNavbarLink = (index) => {
		const updatedSublinks = [...navSublinks];
		updatedSublinks[index] = false;
		setNavSublinks(updatedSublinks);
	};

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const phoneLogOut = (e) => {
		e.preventDefault();
		localStorage.setItem('session_token', null);
		setIsLoggedIn(false);
		setUserType('user');
		navigate('/');
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem key={'Home Page'} disablePadding>
					<ListItemButton component={Link} to={!isLoggedIn ? '/login' : '/'}>
						<ListItemIcon>
							<AddHomeIcon />
						</ListItemIcon>
						<ListItemText primary={'Home Page'} />
					</ListItemButton>
				</ListItem>
				<ListItem key={'Profile'} disablePadding>
					<ListItemButton component={Link} to={!isLoggedIn ? '/login' : '/Dashboard'}>
						<ListItemIcon>
							<AccountCircleIcon />
						</ListItemIcon>
						<ListItemText primary={'Profile'} />
					</ListItemButton>
				</ListItem>
				{!isLoggedIn ? (
					<>
						<ListItem key={'Signup'} disablePadding>
							<ListItemButton component={Link} to="/signup">
								<ListItemIcon>
									<PersonAddIcon />
								</ListItemIcon>
								<ListItemText primary={'Signup'} />
							</ListItemButton>
						</ListItem>
						<ListItem key={'Log In'} disablePadding>
							<ListItemButton component={Link} to="/login">
								<ListItemIcon>
									<LoginIcon />
								</ListItemIcon>
								<ListItemText primary={'Log In'} />
							</ListItemButton>
						</ListItem>
					</>
				) : (
					<ListItem key={'Log Out'} disablePadding>
						<ListItemButton
							to="/"
							onClick={(e) => {
								e.preventDefault();
								localStorage.setItem('session_token', null);
								setIsLoggedIn(false);
								setUserType('user');
								navigate('/');
							}}
						>
							<ListItemIcon>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText primary={'Log Out'} />
						</ListItemButton>
					</ListItem>
				)}
				<ListItem key={'Settings'} disablePadding>
					<ListItemButton component={Link} to={!isLoggedIn ? '/login' : '/'}>
						<ListItemIcon>
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText primary={'Settings'} />
					</ListItemButton>
				</ListItem>
			</List>

			<Divider />
			<List>
				<ListItem key={'My Rides'} disablePadding>
					<ListItemButton component={Link} to={!isLoggedIn ? '/login' : '/tickets'}>
						<ListItemIcon>
							<TrainIcon />
						</ListItemIcon>
						<ListItemText primary={'My Rides'} />
					</ListItemButton>
				</ListItem>
				<ListItem key={'Book Ticket'} disablePadding>
					<ListItemButton component={Link} to={!isLoggedIn ? '/login' : '/tickets/purchase'}>
						<ListItemIcon>
							<ConfirmationNumberIcon />
						</ListItemIcon>
						<ListItemText primary={'Book Ticket'} />
					</ListItemButton>
				</ListItem>
				<ListItem key={'Subscriptions'} disablePadding>
					<ListItemButton component={Link} to={!isLoggedIn ? '/login' : '/subscription'}>
						<ListItemIcon>
							<SubscriptionsIcon />
						</ListItemIcon>
						<ListItemText primary={'Subscriptions'} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton
						onClick={() =>
							window.open('https://google-metro-location-service.vercel.app/', '_blank')
						} // Attach the onClick event handler
						component="a" // Change to "a" since it's not a react-router link
						href="https://google-metro-location-service.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ListItemIcon>
							<DirectionsSubwayFilledIcon />
						</ListItemIcon>
						<ListItemText primary="Start Ride" />
					</ListItemButton>
				</ListItem>
			</List>

			{userType !== 'user' && (
				<>
					<ListItem key={'Create Station'} disablePadding>
						<ListItemButton component={Link} to={!isLoggedIn ? '/login' : '/CreateStation'}>
							<ListItemIcon>
								<TrafficIcon />
							</ListItemIcon>
							<ListItemText primary={'Create Station'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'UpdateStation'} disablePadding>
						<ListItemButton component={Link} to={!isLoggedIn ? '/login' : '/UpdateStation'}>
							<ListItemIcon>
								<TrafficIcon />
							</ListItemIcon>
							<ListItemText primary={'UpdateStation'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'Delete Station'} disablePadding>
						<ListItemButton component={Link} to={!isLoggedIn ? '/login' : '/DeleteStation'}>
							<ListItemIcon>
								<TrafficIcon />
							</ListItemIcon>
							<ListItemText primary={'Delete Station'} />
						</ListItemButton>
					</ListItem>
				</>
			)}
		</Box>
	);

	const toggleDrawer = (anchor, open) => (event) => {
		event.preventDefault();
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setState({ ...state, [anchor]: open });
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
					<a href="/" className="navbar-logo">
						<img className="transparentLogo" src={logo} alt="" />
					</a>
				</div>
				<div className={`navbar-menu`}>
					<div className="navbar-hamburger-menu" onClick={toggleDrawer('left', true)}>
						<span className="navbar-line"></span>
						<span className="navbar-line"></span>
						<span className="navbar-line"></span>
					</div>
					<ul className="navbar-nav-links">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href={isLoggedIn ? '/tickets' : '/login'}>My Rides</a>
						</li>
						<li>
							<a href={isLoggedIn ? '/tickets/purchase' : '/login'}>Book Ticket</a>
						</li>
						<li>
							<a href={isLoggedIn ? '/subscription' : '/login'}>Subscription</a>
						</li>
						<li>
							<a href={'https://google-metro-location-service.vercel.app/'}>Start Ride</a>
						</li>

						{(userType === 'admin' || userType === 'superadmin') && (
							<li
								onMouseEnter={() => handleMouseEnterNavbarLink(1)}
								onMouseLeave={() => handleMouseLeaveNavbarLink(1)}
							>
								<a href="htt">Manage Stations</a>
								{navSublinks[1] && (
									<div className="sublinks-container">
										<ul className="sublinks">
											<li>
												<a href="/CreateStation">Create Station</a>
											</li>
											<li>
												<a href="/UpdateStation">Update Station</a>
											</li>
											<li>
												<a href="/DeleteStation">Delete Station</a>
											</li>
										</ul>
									</div>
								)}
							</li>
						)}
						{(userType === 'admin' || userType === 'superadmin') && (
							<li
								onMouseEnter={() => handleMouseEnterNavbarLink(2)}
								onMouseLeave={() => handleMouseLeaveNavbarLink(2)}
							>
								<a href="htt">Manage Routes</a>
								{navSublinks[2] && (
									<div className="sublinks-container">
										<ul className="sublinks">
											<li>
												<a href="/CreatRoute">Create Route</a>
											</li>
											<li>
												<a href="UpdateRoute">Update Route</a>
											</li>
											<li>
												<a href="DeleteRoute">Delete Route</a>
											</li>
										</ul>
									</div>
								)}
							</li>
						)}
						{(userType === 'admin' || userType === 'superadmin') && (
							<li>
								<a href="/zones">Zones</a>
							</li>
						)}
						<div className="navbar-spacer" onClick={toggleDrawer('left', true)}></div>

						{!isLoggedIn && (
							<li className="navbar-login-out-ID">
								<a href="/login" className="navbar-login-out-text-ID no-hover-animation">
									Log In
								</a>
							</li>
						)}
						{isLoggedIn && (
							<li className="navbar-login-out-ID">
								<a
									href="ONCLICK METHOD"
									className="navbar-login-out-text-ID no-hover-animation"
									onClick={(e) => {
										e.preventDefault();
										localStorage.setItem('session_token', null);
										setIsLoggedIn(false);
										setUserType('user');
										navigate('/');
									}}
								>
									Log Out
								</a>
							</li>
						)}

						<li>
							{!isLoggedIn && (
								<a href="/signup" className="special-link signUpLink">
									Sign Up
								</a>
							)}
						</li>
						<li>
							<a href={isLoggedIn ? '/dashboard' : '/login'} className="special-link">
								<AccountCircleIcon className="profileIcon" />
							</a>
						</li>
						<li>
							<a href="/" className="special-link">
								<SettingsIcon className="settingsIcon" />
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<React.Fragment>
					<Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
						{list('left')}
					</Drawer>
				</React.Fragment>
			</div>
		</nav>
	);
};
// var navbar = document.getElementById("navbar-container");

// // Get the toggleNavbar element by its ID
// var toggleNavbar = document.getElementById("toggleNavbar");

// toggleNavbar.addEventListener("click", function () {
//   console.log("let's goooooooo");
//   // Check the current visibility state of the navbar
//   var isNavbarVisible = navbar.style.visibility === "visible";

//   // Toggle the visibility based on the current state
//   if (isNavbarVisible) {
//     navbar.style.visibility = "hidden";
//   } else {
//     navbar.style.visibility = "visible";
//   }
// });

export default Navbar;

/*
Home

My Rides			      (view all tickets, refund request)

Get Ticket	         (buy a ticket --transaction/subscription--)

Subscription 			(view sub, cancel sub, buy sub)

Log In / LogOut

Sign Up

Profile --> Dashboard

Transactions

Transactions			(7oatah fel profile in dashboard)



*/
