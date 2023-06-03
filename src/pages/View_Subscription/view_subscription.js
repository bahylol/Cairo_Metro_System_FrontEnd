import Footer from '../Footer/Footer.js';

import './view_subscription.css';
import './cards.css';

import image from '../../Assets/tickets.webp';
import trainSub from '../../Assets/trainSub.jpg';
import rookieSub from '../../Assets/rookieSub.jpg';
import interSub from '../../Assets/interSub.webp';
import proSub from '../../Assets/proSub.webp';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

const View_subscription = () => {
	const subscriptionData = {
		sub_id: 1,
		duration: 'monthly',
		zone_id: 1,
		trans_id: 1,
		status: 'active',
		maxnumberofusages: 15,
		numberofusages: 15,
		user_id: 1,
		amount: 140000,
		transaction_to: 'payment',
		trans_date: '1979-12-30T22:00:00.000Z',
		card_type: 'Visa',
		credit_card: 1,
		holder_name: 'Joe',
	};

	const transactionDate = new Date(subscriptionData.trans_date);
	const formattedDate = transactionDate.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	const currentDate = new Date();
	const formattedCurrentDate = currentDate.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	const ExpandMore = styled((props) => {
		const { expand, ...other } = props;
		return <IconButton {...other} />;
	})(({ theme, expand }) => ({
		transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	}));

	const [expanded, setExpanded] = React.useState(false);
	const [refundModal, setRefundModal] = React.useState(false);

	const toggleRefundModal = () => {
		setRefundModal(!refundModal);
	};

	const [subscribeModal, setSubscribeModal] = React.useState(false);
	const [modalDuration, setModalDuration] = React.useState('');
	const [modalRides, setModalRides] = React.useState('');

	const toggleSubscribeModal = (e, duration, rides) => {
		e.preventDefault();
		setModalDuration(duration);
		setModalRides(rides);
		setSubscribeModal(!subscribeModal);
	};

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));

	const bull = (
		<Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
			•
		</Box>
	);

	return (
		<>
			<div className="viewSubscriptionSVPage">
				<header>Your Subscription</header>
				<div className="SVPageContainer">
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2} columns={16}>
							<Grid item xs={0}>
								<Item>
									<Card sx={{ maxWidth: 400, fontFamily: 'Share Tech Mono, monospace' }}>
										<CardHeader
											action={
												<IconButton onClick={toggleRefundModal} aria-label="settings">
													<MoreVertIcon />
												</IconButton>
											}
											title={`Your ${subscriptionData.duration} subscription`}
											subheader={formattedDate}
										/>
										<img className="VSImage1" src={image} alt="" />
										<CardContent>
											<Typography variant="body2" color="text.secondary">
												Discover seamless travel with our subscription plans! Choose
												from monthly, quarterly, or annual subscriptions for easy access
												to the metro booking system. Say goodbye to purchasing tickets
												every time you travel and enjoy unlimited journeys. As a loyal
												customer, unlock exclusive promo codes as a token of our
												appreciation. Subscribe now and experience convenience and
												exciting rewards!
											</Typography>
										</CardContent>
										<CardActions disableSpacing>
											<IconButton aria-label="add to favorites">
												<FavoriteIcon />
											</IconButton>
											<IconButton aria-label="share">
												<ShareIcon />
											</IconButton>
											<ExpandMore
												expand={expanded}
												onClick={handleExpandClick}
												aria-expanded={expanded}
												aria-label="show more"
											>
												<ExpandMoreIcon />
											</ExpandMore>
										</CardActions>
										<Collapse in={expanded} timeout="auto" unmountOnExit>
											<CardContent>
												<h3>Your Subscription Info:</h3>
												<Typography paragraph>
													Your unique subscription ID number: {subscriptionData.sub_id}
												</Typography>
												<Typography paragraph>
													Type: {subscriptionData.duration}
												</Typography>
												<Typography paragraph>
													Status: {subscriptionData.status}
												</Typography>
												<Typography paragraph>
													Usages: {subscriptionData.numberofusages} out of{' '}
													{subscriptionData.maxnumberofusages}
												</Typography>
												<Typography paragraph>
													Price: {subscriptionData.amount}
												</Typography>
												<Typography paragraph>Start date: {formattedDate}</Typography>
											</CardContent>
										</Collapse>
									</Card>
								</Item>
							</Grid>

							<Grid item xs={10}>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<div>
										<Box
											sx={{
												width: '300px',
												height: '300px',
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'space-between',
											}}
										>
											<Card variant="outlined" sx={{ height: '100%' }}>
												<React.Fragment>
													<CardContent>
														<Typography
															sx={{ fontSize: 14 }}
															color="text.secondary"
															gutterBottom
														>
															Fact of the Day
														</Typography>
														<Typography variant="h5" component="div">
															Cost{bull}Saving
														</Typography>
														<Typography variant="body2">
															Ticket subscriptions for metro rides provide
															significant cost savings, with monthly passes offering
															up to 20% savings compared to individual tickets. These
															cost savings make them an attractive option for regular
															metro riders looking to reduce their transportation
															expenses.
														</Typography>
													</CardContent>
													<CardActions>
														<Button size="small">Learn More</Button>
													</CardActions>
												</React.Fragment>
											</Card>
										</Box>
									</div>
									<div>
										<Box
											sx={{
												width: '300px',
												height: '300px',
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'space-between',
											}}
										>
											<Card variant="outlined" sx={{ height: '100%' }}>
												<React.Fragment>
													<CardContent>
														<Typography
															sx={{ fontSize: 14 }}
															color="text.secondary"
															gutterBottom
														>
															Fact Two of the Day
														</Typography>
														<Typography variant="h5" component="div">
															Encourage{bull}P.T.
														</Typography>
														<Typography variant="body2">
															Ticket subscriptions not only save money but also
															encourage increased public transportation usage,
															reducing traffic congestion and promoting a more
															sustainable urban environment. Subscribe and make it
															easier for commuters to access and utilize the metro
															system.
														</Typography>
													</CardContent>
													<CardActions>
														<Button size="small">Learn More</Button>
													</CardActions>
												</React.Fragment>
											</Card>
										</Box>
									</div>
								</div>

								<div className="VSSubTrainImage">
									<img className="VSImage2" src={trainSub} alt="TRAIN-IMAGE" />
								</div>
							</Grid>
						</Grid>
					</Box>
				</div>
				{refundModal && (
					<div className="VSmodal">
						<div onClick={toggleRefundModal} className="VSoverlay">
							<div className="VS-modal-form">
								<h2>Cancel Your Current Subscription</h2>
								<p>--Caneling, will lead to the loss of your remaining ticket-usages--</p>
								<div className="VSmodal-Refundcolumn">
									<button className="close-model" onClick={toggleRefundModal}>
										Back
									</button>
									<button className="close-model">Cancel Subscription</button>
								</div>
							</div>
						</div>
					</div>
				)}

				{subscribeModal && (
					<div className="VSmodal">
						<div onClick={toggleSubscribeModal} className="VSoverlay">
							<div className="VS-modal-form">
								<h2>Subscribe to the following plan</h2>
								<p>--Plan Information--</p>
								<p>
									Type: {modalDuration} <br />
									You will recieve {modalRides}
								</p>

								<div className="VSmodal-Refundcolumn">
									<button className="close-model" onClick={toggleSubscribeModal}>
										Back
									</button>
									<button className="close-model">Subscribe</button>
								</div>
							</div>
						</div>
					</div>
				)}
				<div className="SVPageContainer">
					<header className="VSCardsHeader">Available Subscriptions</header>
					<Grid sx={{ flexGrow: 1 }} container spacing={2}>
						<Grid item xs={12}>
							<Grid container justifyContent="center" spacing={10}>
								<Grid item>
									<Paper
										sx={{
											height: 600,
											width: 370,
										}}
									>
										<div className="singleSubCard">
											<div className="card-grid-space">
												<div className="num">MONTHLY</div>
												<a
													className="card"
													href="https"
													style={{
														'--bg-img': `url(${rookieSub})`,
													}}
													onClick={(e) =>
														toggleSubscribeModal(e, 'monthly', '15 Rides/1 Month')
													}
												>
													<div>
														<h1>Affordable and flexible travel options</h1>
														<p>Convenient and easy rides</p>
														<div className="date">{formattedCurrentDate}</div>
														<div className="tags">
															<div className="tag">15 Rides/1 Month</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</Paper>
								</Grid>
								<Grid item>
									<Paper
										sx={{
											height: 600,
											width: 350,
										}}
									>
										<div className="singleSubCard">
											<div className="card-grid-space">
												<div className="num">QUARTERLY</div>
												<a
													className="card"
													href="https"
													style={{
														'--bg-img': `url(${interSub})`,
													}}
													onClick={(e) =>
														toggleSubscribeModal(e, 'quarterly', '150 Rides/3 Months')
													}
												>
													<div>
														<h1>Unlock massive savings on frequent rides</h1>
														<p>Enjoy hassle-free commuting for 3 months</p>
														<div className="date">{formattedCurrentDate}</div>
														<div className="tags">
															<div className="tag">150 Rides/3 Months</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</Paper>
								</Grid>
								<Grid item>
									<Paper
										sx={{
											height: 600,
											width: 350,
										}}
									>
										<div className="singleSubCard">
											<div className="card-grid-space">
												<div className="num">ANNUALLY</div>
												<a
													className="card"
													href="https"
													style={{
														'--bg-img': `url(${proSub})`,
													}}
													onClick={(e) =>
														toggleSubscribeModal(e, 'yearly', '400 Rides/12 Months')
													}
												>
													<div>
														<h1>Unlimited rides all year round!</h1>
														<p>Maximize your savings and ride with ease</p>
														<div className="date">{formattedCurrentDate}</div>
														<div className="tags">
															<div className="tag">400 Rides/12 Months</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
				<div className="SVPageContainer">
					<header className="VSCardsHeader">Payment Information</header>
					<form className="GT-form">
						<div className="GT-column">
							<div className="GT-input-box">
								<label>Card Type</label>
								<input type="text" placeholder="Enter card type" required />
							</div>

							<div className="GT-input-box">
								<label>Holder Name</label>
								<input type="text" placeholder="Enter holder name" required />
							</div>

							<div className="GT-input-box">
								<label>Expiration Date</label>
								<input type="date" placeholder="Enter expiration date" required />
							</div>
						</div>

						<div className="GT-column">
							<div className="GT-input-box">
								<label>Card Number</label>
								<input type="text" placeholder="Enter card number" required />
							</div>
						</div>
						<div>
							<FormGroup>
								<FormControlLabel
									className="rememberSwitch"
									control={<Switch defaultChecked />}
									label="Remember My Payment Information"
								/>
							</FormGroup>
						</div>
					</form>
				</div>
				<Footer className="exclude-from-padding" />
			</div>
		</>
	);
};

export default View_subscription;
