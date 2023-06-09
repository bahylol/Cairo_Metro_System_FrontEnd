import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../theme';
// here you import the icons that will be on the left  side
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import React, { useEffect, useState } from 'react';
// here you import the icons that will be on the left  side

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockResetIcon from '@mui/icons-material/LockReset';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DirectionsSubwayFilledIcon from '@mui/icons-material/DirectionsSubwayFilled';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const Item = ({ title, to, icon, selected, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			active={selected === title}
			style={{
				color: colors.grey[100],
			}}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

const Sidebar = ({ userType, isHome }) => {
	console.log('side abrrr');
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState('Dashboard'); //my current page
	const [data, setuserData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			// let response
			//  let x
			try {
				const response = await fetch('http://localhost:3000/get_cur_user', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						token: `session_token=${localStorage.getItem('session_token')}`,
					},
				});
				const data = await response.json();
				console.log(data);
				setuserData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);
	return (
		<Box
			sx={{
				'& .pro-sidebar-inner': {
					background: `${colors.primary[400]} !important`,
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .pro-menu-item.active': {
					color: '#6870fa !important',
				},
			}}
		>
			{userType === 'admin' || userType === 'superadmin' ? (
				<ProSidebar collapsed={isCollapsed}>
					<Menu iconShape="square">
						{/* LOGO AND MENU ICON */}
						<MenuItem
							onClick={() => setIsCollapsed(!isCollapsed)}
							icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
							style={{
								margin: '10px 0 20px 0',
								color: colors.grey[100],
							}}
						>
							{!isCollapsed && (
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									ml="15px"
								>
									{/* 1- the word above the user name it's hiw role user or admin   */}
									<Typography variant="h4" color={colors.grey[100]}>
										{data.userrole}
									</Typography>
									<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
										<MenuOutlinedIcon />
									</IconButton>
								</Box>
							)}
						</MenuItem>
						{/* 2- this is the profile picture  */}
						{!isCollapsed && (
							<Box mb="25px">
								<Box display="flex" justifyContent="center" alignItems="center">
									<img
										alt="profile-user"
										width="100px"
										height="100px"
										src={`../../assets/user.png`}
										style={{ cursor: 'pointer', borderRadius: '50%' }}
									/>
								</Box>
								<Box textAlign="center">
									<Typography
										variant="h3"
										color={colors.grey[100]}
										fontWeight="bold"
										sx={{ m: '10px 0 0 0' }}
									>
										{/* 3- this is the  name   */}
										{data.username}
									</Typography>
									{/* 4- this is the nick name   */}
									<Typography variant="h5" color={colors.greenAccent[500]}>
										{data.usertype}
									</Typography>
								</Box>
							</Box>
						)}
						{/* potato */}
						<Box paddingLeft={isCollapsed ? undefined : '10%'}>
							<Item
								// 5- this is the home button we may make it goes to the home page
								title="Home Page" // the word wrriten besine the icon
								to="/" //**  this is the path it will go to */
								icon={<HomeOutlinedIcon />} // the icon image
								isHome={true}
								selected={selected}
								setSelected={setSelected}
							/>

							<Item
								// 5- this is the home button we may make it goes to the home page
								title="Dashboard" // the word wrriten besine the icon
								to="/Dashboard" //**  this is the path it will go to */
								icon={<DashboardIcon />} // the icon image
								selected={selected}
								setSelected={setSelected}
							/>

							{/* 6- this is just  a labael  */}
							<Typography
								variant="h6"
								color={colors.grey[300]}
								sx={{ m: '15px 0 5px 20px' }}
							>
								Data
							</Typography>
							<Item
								// 7- the first icon page
								title="Manage Team"
								to="/Dashboard/team"
								icon={<PeopleOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Contacts Information"
								to="/Dashboard/contacts"
								icon={<ContactsOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Reufnd requests"
								to="/Dashboard/RefundRequest"
								icon={<ReceiptOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>

							<Typography
								variant="h6"
								color={colors.grey[300]}
								sx={{ m: '15px 0 5px 20px' }}
							>
								Pages
							</Typography>
							<Item
								title="Profile Form"
								to="/Dashboard/form"
								icon={<PersonOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Calendar"
								to="/Dashboard/calendar"
								icon={<CalendarTodayOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="FAQ Page"
								to="/Dashboard/faq"
								icon={<HelpOutlineOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>

							<Typography
								variant="h6"
								color={colors.grey[300]}
								sx={{ m: '15px 0 5px 20px' }}
							>
								Charts
							</Typography>
							<Item
								title="Bar Chart"
								to="/Dashboard/bar"
								icon={<BarChartOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Pie Chart"
								to="/Dashboard/pie"
								icon={<PieChartOutlineOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Line Chart"
								to="/Dashboard/line"
								icon={<TimelineOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Geography Chart"
								to="/Dashboard/geography"
								icon={<MapOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
						</Box>
					</Menu>
				</ProSidebar>
			) : (
				<ProSidebar collapsed={isCollapsed}>
					<Menu iconShape="square">
						{/* LOGO AND MENU ICON */}
						<MenuItem
							onClick={() => setIsCollapsed(!isCollapsed)}
							icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
							style={{
								margin: '10px 0 20px 0',
								color: colors.grey[100],
							}}
						>
							{!isCollapsed && (
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									ml="15px"
								>
									{/* 1- the word above the user name it's hiw role user or admin   */}
									<Typography variant="h3" color={colors.grey[100]}>
										User
									</Typography>
									<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
										<MenuOutlinedIcon />
									</IconButton>
								</Box>
							)}
						</MenuItem>
						{/* 2- this is the profile picture  */}
						{!isCollapsed && (
							<Box mb="25px">
								<Box display="flex" justifyContent="center" alignItems="center">
									<img
										alt="profile-user"
										width="100px"
										height="100px"
										src={`../../assets/user.png`}
										style={{ cursor: 'pointer', borderRadius: '50%' }}
									/>
								</Box>
								<Box textAlign="center">
									<Typography
										variant="h2"
										color={colors.grey[100]}
										fontWeight="bold"
										sx={{ m: '10px 0 0 0' }}
									>
										{/* 3- this is the  name   */}
										Ahmed Yehia
									</Typography>
									{/* 4- this is the nick name   */}
									<Typography variant="h5" color={colors.greenAccent[500]}>
										Fancy User
									</Typography>
								</Box>
							</Box>
						)}
						{/* potato */}
						<Item
							// 5- this is the home button we may make it goes to the home page
							title="Home Page" // the word wrriten besine the icon
							to="/" //**  this is the path it will go to */
							icon={<HomeOutlinedIcon />} // the icon image
							isHome={true}
							selected={selected}
							setSelected={setSelected}
						/>
						<Box paddingLeft={isCollapsed ? undefined : '10%'}>
							<Item
								// 5- this is the home button we may make it goes to the home page
								title="Dashboard" // the word wrriten besine the icon
								to="/Dashboard" //**  this is the path it will go to */
								icon={<DashboardIcon />} // the icon image
								selected={selected}
								setSelected={setSelected}
							/>
						</Box>
						<Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 50px' }}>
							{isCollapsed ? '' : 'Profile'}
						</Typography>

						<Box paddingLeft={isCollapsed ? undefined : '10%'}>
							<Item
								// 5- this is the home button we may make it goes to the home page
								title="My Profile" // the word wrriten besine the icon
								to="/Dashboard/Profile" //**  this is the path it will go to */
								icon={<AccountCircleIcon />} // the icon image
								selected={selected}
								setSelected={setSelected}
							/>
							{/* 6- this is just  a labael  */}
							<Typography
								variant="h6"
								color={colors.grey[300]}
								sx={{ m: '15px 0 5px 20px' }}
							>
								{isCollapsed ? '' : 'Manage Account'}
							</Typography>
							<Item
								// 7- the first icon page
								title="Reset Password"
								to="/Dashboard/Reset_password"
								icon={<LockResetIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Tickets"
								to="/Tickets"
								icon={<ConfirmationNumberIcon />}
								selected={selected}
								setSelected={setSelected}
							/>

							<Item
								title="Rides"
								to="/Rides"
								icon={<DirectionsSubwayFilledIcon />}
								selected={selected}
								setSelected={setSelected}
							/>

							<Item
								title="Subscription"
								to="/Subscription"
								icon={<LocalAtmIcon />}
								selected={selected}
								setSelected={setSelected}
							/>

							<Typography
								variant="h6"
								color={colors.grey[300]}
								sx={{ m: '15px 0 5px 20px' }}
							>
								{isCollapsed ? '' : 'Other'}
							</Typography>

							<Item
								title="Calendar"
								to="/Dashboard/calendar"
								icon={<CalendarTodayOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="FAQ Page"
								to="/Dashboard/faq"
								icon={<HelpOutlineOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>

							<Typography
								variant="h6"
								color={colors.grey[300]}
								sx={{ m: '15px 0 5px 20px' }}
							>
								{isCollapsed ? '' : 'Charts'}
							</Typography>
							<Item
								title="Bar Chart"
								to="/Dashboard/bar"
								icon={<BarChartOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Pie Chart"
								to="/Dashboard/pie"
								icon={<PieChartOutlineOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Line Chart"
								to="/Dashboard/line"
								icon={<TimelineOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Geography Chart"
								to="/Dashboard/geography"
								icon={<MapOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
						</Box>
					</Menu>
				</ProSidebar>
			)}
		</Box>
	);
};

export default Sidebar;