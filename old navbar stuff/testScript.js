import React, { useState } from 'react';
import './Navbar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {
	const [navSublinks, setNavSublinks] = useState([]);

	const handleMouseEnter = (index) => {
		const updatedSublinks = [...navSublinks];
		updatedSublinks[index] = true;
		setNavSublinks(updatedSublinks);
	};

	const handleMouseLeave = (index) => {
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
				{['Home', 'Tickets', 'Subscriptions', 'Transactions'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		event.preventDefault();
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
						RetroMetro
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
						<li
							onMouseEnter={() => handleMouseEnter(1)}
							onMouseLeave={() => handleMouseLeave(1)}
						>
							<a href="htt">Tickets</a>
							{navSublinks[1] && (
								<div className="sublinks-container">
									<ul className="sublinks">
										<li>
											<a href="htt">View Tickets</a>
										</li>
										<li>
											<a href="htt">Buy Tickets</a>
										</li>
									</ul>
								</div>
							)}
						</li>
						<li
							onMouseEnter={() => handleMouseEnter(2)}
							onMouseLeave={() => handleMouseLeave(2)}
						>
							<a href="htt">Subscription</a>
							{navSublinks[2] && (
								<div className="sublinks-container">
									<ul className="sublinks">
										<li>
											<a href="htt">View Subscription</a>
										</li>
										<li>
											<a href="htt">Buy Subscription</a>
										</li>
									</ul>
								</div>
							)}
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

Tickets
	My Tickets			(view all tickets, refund request)
	Purchase Ticket	(buy a ticket --transaction/subscription--)

Subscription 			(view sub, cancel sub, buy sub)

Transactions			(7oatah fel profile in dashboard)



*/
