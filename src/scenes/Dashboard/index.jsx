import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import GeographyChart from '../../components/GeographyChart';
import BarChart from '../../components/BarChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';

import ListIcon from '@mui/icons-material/List';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockResetIcon from '@mui/icons-material/LockReset';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DirectionsSubwayFilledIcon from '@mui/icons-material/DirectionsSubwayFilled';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Dashboard = ({ userType }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

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

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			{userType === 'user' ? (
				<List>
					<label style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
						User
					</label>
					<ListItem key={'Home Page'} disablePadding>
						<ListItemButton to="/">
							<ListItemIcon>
								<HomeOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Home Page'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'My Profile'} disablePadding>
						<ListItemButton to="/Dashboard/Profile">
							<ListItemIcon>
								<AccountCircleIcon />
							</ListItemIcon>
							<ListItemText primary={'My Profile'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'Reset Password'} disablePadding>
						<ListItemButton to="/Dashboard/Reset_password">
							<ListItemIcon>
								<LockResetIcon />
							</ListItemIcon>
							<ListItemText primary={'Reset Password'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'Book Ticket'} disablePadding>
						<ListItemButton to="/tickets/purchase">
							<ListItemIcon>
								<ConfirmationNumberIcon />
							</ListItemIcon>
							<ListItemText primary={'Book Ticket'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'My Rides'} disablePadding>
						<ListItemButton to="/tickets">
							<ListItemIcon>
								<DirectionsSubwayFilledIcon />
							</ListItemIcon>
							<ListItemText primary={'My Rides'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'Subscription'} disablePadding>
						<ListItemButton to="/subscription">
							<ListItemIcon>
								<LocalAtmIcon />
							</ListItemIcon>
							<ListItemText primary={'Subscription'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'Senior Request'} disablePadding>
						<ListItemButton to="/Dashboard/senior/request">
							<ListItemIcon>
								<ReceiptLongIcon />
							</ListItemIcon>
							<ListItemText primary={'Senior Request'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'My Transactions'} disablePadding>
						<ListItemButton to="/transactions">
							<ListItemIcon>
								<ReceiptLongIcon />
							</ListItemIcon>
							<ListItemText primary={'My Transactions'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'Calendar'} disablePadding>
						<ListItemButton to="/Dashboard/calendar">
							<ListItemIcon>
								<CalendarTodayOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Calendar'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'FAQ Page'} disablePadding>
						<ListItemButton to="/Dashboard/faq">
							<ListItemIcon>
								<HelpOutlineOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'FAQ Page'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'Bar Chart'} disablePadding>
						<ListItemButton to="/Dashboard/bar">
							<ListItemIcon>
								<BarChartOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Bar Chart'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'Pie Chart'} disablePadding>
						<ListItemButton to="/Dashboard/pie">
							<ListItemIcon>
								<PieChartOutlineOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Pie Chart'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'Line Chart'} disablePadding>
						<ListItemButton to="/Dashboard/line">
							<ListItemIcon>
								<TimelineOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Line Chart'} />
						</ListItemButton>
					</ListItem>
					<ListItem key={'Geography Chart'} disablePadding>
						<ListItemButton to="/Dashboard/geography">
							<ListItemIcon>
								<MapOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Geography Chart'} />
						</ListItemButton>
					</ListItem>
				</List>
			) : (
				<List>
					<label style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
						Admin
					</label>
					<ListItem key={'Home'} disablePadding>
						<ListItemButton to="/">
							<ListItemIcon>
								<HomeOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Home'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'Manage Team'} disablePadding>
						<ListItemButton to="/Dashboard/team">
							<ListItemIcon>
								<PeopleOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Manage Team'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'Contact Information'} disablePadding>
						<ListItemButton to="/Dashboard/contacts">
							<ListItemIcon>
								<ContactsOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Contact Information'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'Manage Requests'} disablePadding>
						<ListItemButton to="/admin/managerequest">
							<ListItemIcon>
								<ReceiptOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Manage Requests'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'Profile Form'} disablePadding>
						<ListItemButton to="/Dashboard/form">
							<ListItemIcon>
								<PersonOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Profile Form'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'Calendar'} disablePadding>
						<ListItemButton to="/Dashboard/calendar">
							<ListItemIcon>
								<CalendarTodayOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Calendar'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'FAQ Page'} disablePadding>
						<ListItemButton to="/Dashboard/faq">
							<ListItemIcon>
								<HelpOutlineOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'FAQ Page'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'Bar Chart'} disablePadding>
						<ListItemButton to="/Dashboard/bar">
							<ListItemIcon>
								<BarChartOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Bar Chart'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'Pie Chart'} disablePadding>
						<ListItemButton to="/Dashboard/pie">
							<ListItemIcon>
								<PieChartOutlineOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Pie Chart'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'Line Chart'} disablePadding>
						<ListItemButton to="/Dashboard/line">
							<ListItemIcon>
								<TimelineOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Line Chart'} />
						</ListItemButton>
					</ListItem>

					<ListItem key={'Geography Chart'} disablePadding>
						<ListItemButton to="/Dashboard/geography">
							<ListItemIcon>
								<MapOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary={'Geography Chart'} />
						</ListItemButton>
					</ListItem>
				</List>
			)}
		</Box>
		// <Divider />
	);

	return (
		<>
			<Box m="20px">
				{/* HEADER */}
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

					<Box>
						<Button
							sx={{
								backgroundColor: colors.blueAccent[700],
								color: colors.grey[100],
								fontSize: '14px',
								fontWeight: 'bold',
								padding: '10px 20px',
							}}
						>
							<DownloadOutlinedIcon sx={{ mr: '10px' }} />
							Download Reports
							{/* //do onclick to this one  */}
						</Button>
						<ListIcon style={{ fontSize: '35px' }} onClick={toggleDrawer('left', true)} />
					</Box>
				</Box>

				{/* GRID & CHARTS */}
				<Box
					display="grid"
					gridTemplateColumns="repeat(12, 1fr)"
					gridAutoRows="140px"
					gap="20px"
				>
					{/* ROW 1 */}
					<Box
						gridColumn="span 3"
						backgroundColor={colors.primary[400]}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<StatBox
							//  {/* // get this number from DB */}
							title="12,361"
							subtitle="Emails Sent"
							progress="0.75"
							increase="+14%"
							icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
						/>
					</Box>
					<Box
						gridColumn="span 3"
						backgroundColor={colors.primary[400]}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<StatBox
							//  {/* // get this number from DB */}

							title="431,225"
							subtitle="Sales Obtained"
							progress="0.50"
							increase="+21%"
							icon={
								<PointOfSaleIcon
									sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
								/>
							}
						/>
					</Box>
					<Box
						gridColumn="span 3"
						backgroundColor={colors.primary[400]}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<StatBox
							//  {/* // get this number from DB */}

							title="32,441"
							subtitle="New Clients"
							progress="0.30"
							increase="+5%"
							icon={
								<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />
							}
						/>
					</Box>
					<Box
						gridColumn="span 3"
						backgroundColor={colors.primary[400]}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<StatBox
							//  {/* // get this number from DB */}

							title="1,325,134"
							subtitle="Traffic Received"
							progress="0.80"
							increase="+43%"
							icon={
								<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />
							}
						/>
					</Box>

					{/* ROW 2 */}
					<Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
						<Box
							mt="25px"
							p="0 30px"
							display="flex "
							justifyContent="space-between"
							alignItems="center"
						>
							<Box>
								<Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
									Revenue Generated
								</Typography>
								<Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
									{/* // get this number from DB */}
									$59,342.32
								</Typography>
							</Box>
							<Box>
								<IconButton>
									<DownloadOutlinedIcon
										// add on click
										sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
									/>
								</IconButton>
							</Box>
						</Box>
						<Box height="250px" m="-20px 0 0 0">
							<LineChart isDashboard={true} />
						</Box>
					</Box>
					<Box
						gridColumn="span 4"
						gridRow="span 2"
						backgroundColor={colors.primary[400]}
						overflow="auto"
					>
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							borderBottom={`4px solid ${colors.primary[500]}`}
							colors={colors.grey[100]}
							p="15px"
						>
							<Typography color={colors.grey[100]} variant="h5" fontWeight="600">
								Recent Transactions
							</Typography>
						</Box>
						{mockTransactions.map((transaction, i) => (
							<Box
								// get data FROM DB
								key={`${transaction.txId}-${i}`}
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								borderBottom={`4px solid ${colors.primary[500]}`}
								p="15px"
							>
								<Box>
									<Typography
										color={colors.greenAccent[500]}
										variant="h5"
										fontWeight="600"
									>
										{transaction.txId}
									</Typography>
									<Typography color={colors.grey[100]}>{transaction.user}</Typography>
								</Box>
								<Box color={colors.grey[100]}>{transaction.date}</Box>
								<Box
									backgroundColor={colors.greenAccent[500]}
									p="5px 10px"
									borderRadius="4px"
								>
									${transaction.cost}
								</Box>
							</Box>
						))}
					</Box>

					{/* ROW 3 */}
					<Box
						gridColumn="span 4"
						gridRow="span 2"
						backgroundColor={colors.primary[400]}
						p="30px"
					>
						<Typography variant="h5" fontWeight="600">
							{/* // get this number from DB */}
							Campaign
						</Typography>
						<Box display="flex" flexDirection="column" alignItems="center" mt="25px">
							<ProgressCircle size="125" />
							<Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
								$48,352 revenue generated
							</Typography>

							{/*              {/* // get this number from DB */}

							<Typography>Includes extra misc expenditures and costs</Typography>
						</Box>
					</Box>
					<Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}>
						<Typography variant="h5" fontWeight="600" sx={{ padding: '30px 30px 0 30px' }}>
							{/* // get this number from DB */}
							Sales Quantity
						</Typography>
						<Box height="250px" mt="-20px">
							<BarChart isDashboard={true} />
							{/* here is the call for dashboard ----------*-*-*-*-----*-**-***--*-*-*-*-**--*-**--*-*-**- */}
						</Box>
					</Box>
					<Box
						gridColumn="span 4"
						gridRow="span 2"
						backgroundColor={colors.primary[400]}
						padding="30px"
					>
						<Typography variant="h5" fontWeight="600" sx={{ marginBottom: '15px' }}>
							Geography Based Traffic
						</Typography>
						<Box height="200px">
							<GeographyChart isDashboard={true} />
						</Box>
					</Box>
				</Box>
			</Box>
			<div>
				<React.Fragment>
					<Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
						{list('left')}
					</Drawer>
				</React.Fragment>
			</div>
		</>
	);
};

export default Dashboard;
