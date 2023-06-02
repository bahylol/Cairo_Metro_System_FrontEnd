import './view_subscription.css';

import image from '../../Assets/tickets.webp';
import trainSub from '../../Assets/trainSub.jpg';

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
											Discover seamless travel with our subscription plans! Choose from
											monthly, quarterly, or annual subscriptions for easy access to the
											metro booking system. Say goodbye to purchasing tickets every time
											you travel and enjoy unlimited journeys. As a loyal customer,
											unlock exclusive promo codes as a token of our appreciation.
											Subscribe now and experience convenience and exciting rewards!
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
											<Typography paragraph>Price: {subscriptionData.amount}</Typography>
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
														Ticket subscriptions for metro rides provide significant
														cost savings, with monthly passes offering up to 20%
														savings compared to individual tickets. These cost savings
														make them an attractive option for regular metro riders
														looking to reduce their transportation expenses.
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
														encourage increased public transportation usage, reducing
														traffic congestion and promoting a more sustainable urban
														environment. Subscribe and make it easier for commuters to
														access and utilize the metro system.
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
		</div>
	);
};

export default View_subscription;
