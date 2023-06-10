import Footer from '../Footer/Footer.js';

import './view_subscription.css';
import './cards.css';

import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';

import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

import { useState, useEffect } from 'react';

const View_subscription = () => {
	const notify = (alert) => {
		toast.error(alert, {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};
	const confirm = (alert) => {
		toast.success(alert, {
			position: 'top-center',
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};
	const navigate = useNavigate();
	const [subscriptionData, setSubscriptionData] = useState({});
	const [expanded, setExpanded] = React.useState(false);
	const [refundModal, setRefundModal] = React.useState(false);
	const [subscribeModal, setSubscribeModal] = React.useState(false);
	const [modalDuration, setModalDuration] = React.useState('');
	const [modalRides, setModalRides] = React.useState('');

	const [cardType, setCardType] = useState('');
	const [holderName, setHolderName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [cardCVV, setCardCVV] = useState('');
	const [expDate, setExpDate] = useState('');
	const [subZones, setSubZones] = React.useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3000/api/v1/users/subscription', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						token: `session_token=${localStorage.getItem('session_token')}`,
					},
				});
				const data = await response.json();
				setSubscriptionData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	console.log('SUBSCRIPTION DATA 1');
	console.log(subscriptionData);

	if (subscriptionData[0]) {
		let subData = {
			sub_id: '------',
			duration: '------',
			zone_id: '------',
			trans_id: '------',
			status: '-----',
			maxnumberofusages: '------',
			minimumstations: '------',
			maximumstations: '------',
			numberofusages: '------',
			user_id: '------',
			amount: '------',
			transaction_to: '------',
			trans_date: '------',
			card_type: '------',
			credit_card: '------',
			holder_name: '------',
		};
		for (let i = 0; i < subscriptionData.length; i++) {
			if (subscriptionData[i].status === 'active') {
				subData = subscriptionData[i];
			}
		}
		// let subData = subscriptionData[0];

		const transactionDate = new Date(subData.trans_date);
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

		const toggleRefundModal = () => {
			setRefundModal(!refundModal);
		};

		const toggleSubscribeModal = (e, duration, rides) => {
			e.preventDefault();
			setModalDuration(duration);
			setModalRides(rides);
			setSubscribeModal(true);
		};
		const closeSubscribeModal = (e) => {
			setSubscribeModal(false);
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

		const handleCancelSubscription = () => {
			fetch('http://localhost:3000/api/v1/users/subscription/cancel', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					token: `session_token=${localStorage.getItem('session_token')}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					// localStorage.setItem('session_token', data[0]);
					if (data[0] === 200) {
						confirm('Subscription Successfully Canceled!');
						setTimeout(function () {
							navigate('/subscription');
						}, 2500);
					} else if (data[0] === 401) {
						notify('You are currently not subscribed to an active plan');
					} else if (data[0] === 402) {
						notify('Error: Could not cancel subscription');
					}
				})
				.catch((error) => console.error(error, 'THIS IS THE ERROR'));
			// .catch((error) => {
			// 	alert('You are currently not subscribed to an active plan');
			// });
		};

		const handleSubscribed = (e) => {
			e.preventDefault();
			if (subZones === '') {
				notify('Incomplete Zone Information!');
			}
			// UNCOMMENT TRANSACTION
			// else if (
			// 	cardType === '' ||
			// 	holderName === '' ||
			// 	expDate === '' ||
			// 	cardNumber === '' ||
			// 	cardCVV === ''
			// ) {
			// 	notify('Incomplete Payment Information!');
			// }
			else {
				fetch('http://localhost:3000/create-checkout-session-subscription', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						token: `session_token=${localStorage.getItem('session_token')}`,
					},
					body: JSON.stringify({
						duration: modalDuration,
						// UNCOMMENT TRANSACTION
						// card_type: cardType,
						// credit_card: cardNumber,
						// holder_name: holderName,
						zone_id: subZones,
					}),
				})
					.then((response) => response.json())
					.then((data) => {
						if (data[0] === 200) {
							window.location.href = data[1];
						} else if (data[0] === 400) {
							notify('You are already subscribed to an active plan');
						} else {
							window.location.href = data[1];
						}
					})
					// .catch((error) => console.error(error, 'THIS IS THE ERROR'));
					.catch((error) => {
						notify('BIG ERROR');
					});
			}
		};

		return (
			<>
				<div className="viewSubscriptionSVPage">
					<header>Your Subscription</header>
					<div className="SVPageContainer">
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2} columns={16}>
								<Grid item xs={0}>
									<Item>
										<Card
											sx={{ maxWidth: 400, fontFamily: 'Share Tech Mono, monospace' }}
										>
											<CardHeader
												action={
													<IconButton
														onClick={toggleRefundModal}
														aria-label="settings"
													>
														<MoreVertIcon />
													</IconButton>
												}
												title={`Your ${subData.duration} subscription`}
												subheader={formattedDate}
											/>
											<img className="VSImage1" src={image} alt="" />
											<CardContent>
												<Typography variant="body2" color="text.secondary">
													Discover seamless travel with our subscription plans! Choose
													from monthly, quarterly, or annual subscriptions for easy
													access to the metro booking system. Say goodbye to purchasing
													tickets every time you travel and enjoy unlimited journeys.
													As a loyal customer, unlock exclusive promo codes as a token
													of our appreciation. Subscribe now and experience convenience
													and exciting rewards!
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
														Your unique subscription ID number: {subData.sub_id}
													</Typography>
													<Typography paragraph>Type: {subData.duration}</Typography>
													<Typography paragraph>
														Zones: {subData.minimumstations}
														{' - '} {subData.maximumstations}
													</Typography>
													<Typography paragraph>Status: {subData.status}</Typography>
													<Typography paragraph>
														Usages: {subData.numberofusages} out of{' '}
														{subData.maxnumberofusages}
													</Typography>
													<Typography paragraph>Price: {subData.amount}</Typography>
													<Typography paragraph>
														Start date: {formattedDate}
													</Typography>
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
																significant cost savings, with monthly passes
																offering up to 20% savings compared to individual
																tickets. These cost savings make them an attractive
																option for regular metro riders looking to reduce
																their transportation expenses.
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
									<p>
										--Caneling, will lead to the loss of your remaining ticket-usages--
									</p>
									<div className="VSmodal-Refundcolumn">
										<button className="close-model" onClick={toggleRefundModal}>
											Back
										</button>
										<button className="close-model" onClick={handleCancelSubscription}>
											Cancel Subscription
										</button>
									</div>
								</div>
							</div>
						</div>
					)}

					{subscribeModal && (
						<div className="VSmodal">
							<div className="VSoverlay">
								<div className="VS-modal-form">
									<h2>Subscribe to the following plan</h2>
									<p>--Plan Information--</p>

									<p>
										Type: {modalDuration} <br />
										You will recieve {modalRides} <br />
										Zone ID: RetroM{'('}
										{subZones}
										{')'}
									</p>
									<FormControl
										sx={{
											m: 1,
											minWidth: 120,
										}}
									>
										<InputLabel htmlFor="demo-dialog-native">Zones</InputLabel>
										<Select
											native
											onChange={(event) => setSubZones(event.target.value)}
											input={<OutlinedInput label="Zones" id="demo-dialog-native" />}
										>
											<option value={1}>
												1 - 9{' stations/ Price: '}
												{modalDuration === 'monthly'
													? '100LE'
													: modalDuration === 'quarterly'
													? '120LE'
													: '150LE'}
											</option>
											<option value={2}>
												10 - 16{' stations/ Price: '}
												{modalDuration === 'monthly'
													? '200LE'
													: modalDuration === 'quarterly'
													? '240LE'
													: '300LE'}
											</option>
											<option value={3}>
												17+{' stations/ Price: '}
												{modalDuration === 'monthly'
													? '400LE'
													: modalDuration === 'quarterly'
													? '480LE'
													: '600LE'}
											</option>

											{/* <option value={1}>1 - 9</option>
											<option value={2}>10 - 16</option>
											<option value={3}>17+</option> */}
										</Select>
									</FormControl>
									<div className="VSmodal-Refundcolumn">
										<button
											className="close-model"
											onClick={(event) => closeSubscribeModal(event)}
										>
											Back
										</button>
										<button
											className="close-model"
											onClick={(event) => handleSubscribed(event)}
										>
											Subscribe
										</button>
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
															toggleSubscribeModal(
																e,
																'quarterly',
																'150 Rides/3 Months'
															)
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
															toggleSubscribeModal(
																e,
																'yearly',
																'400 Rides/12 Months'
															)
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
					{/* UNCOMMENT TRANSACTION */}
					{/* <div className="SVPageContainer">
						<header className="VSCardsHeader">Payment Information</header>
						<form className="GT-form">
							<div className="GT-column">
								<div className="GT-input-box">
									<label>Card Type</label>
									<input
										type="text"
										placeholder="Enter card type"
										required
										onChange={(event) => setCardType(event.target.value)}
									/>
								</div>

								<div className="GT-input-box">
									<label>Holder Name</label>
									<input
										type="text"
										placeholder="Enter holder name"
										required
										onChange={(event) => setHolderName(event.target.value)}
									/>
								</div>

								<div className="GT-input-box">
									<label>Expiration Date</label>
									<input
										type="date"
										placeholder="Enter expiration date"
										required
										onChange={(event) => setExpDate(event.target.value)}
									/>
								</div>
							</div>

							<div className="GT-column">
								<div className="GT-input-box">
									<label>Card Number</label>
									<input
										type="number"
										placeholder="0000 0000 0000 0000"
										required
										onChange={(event) => setCardNumber(event.target.value)}
									/>
								</div>
								<div className="GT-input-box">
									<label>CVV</label>
									<input
										type="number"
										placeholder="000"
										required
										onChange={(event) => setCardCVV(event.target.value)}
									/>
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
					</div> */}
					<ToastContainer />
					<Footer className="exclude-from-padding" />
				</div>
			</>
		);
	}
};

export default View_subscription;
