import React, { useState } from 'react';
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

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import logo from '../../Assets/logo2.png';

const Navbar = () => {
	const [userType, setUserType] = useState('user');

	const userLoggedIn = () => {
		setUserType('user');
	};

	const adminLoggedIn = () => {
		setUserType('admin');
	};

	const [loggedIn, setLoggedIn] = useState(false);

	const login = () => {
		setLoggedIn(true);
	};

	const logout = () => {
		setLoggedIn(false);
	};

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

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{['Profile', 'Log In', 'Sign Up', 'Settings'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							{index === 0 && (
								<ListItemIcon>
									<AccountCircleIcon />
								</ListItemIcon>
							)}
							{!loggedIn && index === 1 && (
								<ListItemIcon>
									<LoginIcon />
								</ListItemIcon>
							)}
							{loggedIn && index === 1 && (
								<ListItemIcon>
									<LogoutIcon />
								</ListItemIcon>
							)}
							{index === 2 && (
								<ListItemIcon>
									<ExitToAppIcon />
								</ListItemIcon>
							)}
							{index === 3 && (
								<ListItemIcon>
									<SettingsIcon />
								</ListItemIcon>
							)}
							<ListItemText
								primary={index === 1 ? (loggedIn ? 'Log Out' : 'Log In') : text}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['Home', 'My Tickets', 'Get Ticket', 'Subscriptions'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							{index === 0 && <ListItemIcon>{<AddHomeIcon />}</ListItemIcon>}
							{index === 1 && <ListItemIcon>{<TrainIcon />}</ListItemIcon>}
							{index === 2 && <ListItemIcon>{<ConfirmationNumberIcon />}</ListItemIcon>}
							{index === 3 && <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>}
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
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
					<a href="htt" className="navbar-logo">
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
							<a href="htt">Home</a>
						</li>
						<li>
							<a href="htt">My Rides</a>
						</li>
						<li>
							<a href="htt">Get Ticket</a>
						</li>
						<li>
							<a href="htt">Subscription</a>
						</li>
						<li
							onMouseEnter={() => handleMouseEnterNavbarLink(1)}
							onMouseLeave={() => handleMouseLeaveNavbarLink(1)}
						>
							<a href="htt">Manage Stations</a>
							{navSublinks[1] && (
								<div className="sublinks-container">
									<ul className="sublinks">
										<li>
											<a href="htt">Create Station</a>
										</li>
										<li>
											<a href="htt">Update Station</a>
										</li>
										<li>
											<a href="htt">Delete Station</a>
										</li>
									</ul>
								</div>
							)}
						</li>
						<div className="navbar-spacer"></div>

						{!loggedIn && (
							<li className="navbar-login-out-ID">
								<a href="htt" className="navbar-login-out-text-ID no-hover-animation">
									Log In
								</a>
							</li>
						)}
						{loggedIn && (
							<li className="navbar-login-out-ID">
								<a href="htt" className="navbar-login-out-text-ID no-hover-animation">
									Log Out
								</a>
							</li>
						)}

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
								<SettingsIcon
									className="settingsIcon"
									onClick={toggleDrawer('left', true)}
								/>
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
