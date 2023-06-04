import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				padding: '0 20px',
			}}
		>
			<Box sx={{ width: '100%', maxWidth: '1400px' }}>
				<Skeleton animation="wave" sx={{ width: '100%', height: '70px' }} />
			</Box>
		</Box>
	);
}

/*

import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './pages/Navbar/Navbar.js';
import GeneralPage from './pages/General_Page/General_Page.js';
import Home from './pages/Home/Home.js';
import Signup from './pages/Signup-Login/Signup';
import Login from './pages/Signup-Login/Login';
import RefundRequestPage from './pages/Refund_Request/Refund_Request.js';
import GetTicket from './pages/Get_Ticket/Get_Ticket.js';
import Transactions from './pages/Transactions/Transactions.js';
import ViewSubscription from './pages/View_Subscription/view_subscription.js';
import NotFound from './pages/NotFound/notFoundPage.js';
import PageLoadingSkeleton from './pages/PageLoadingSkeleton.js/pageLoadSkel.js';
import NavBarLoadingSkeleton from './pages/PageLoadingSkeleton.js/navbarLoadSkel';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const location = useLocation();

	useEffect(() => {
		const handleRouteChange = () => {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 1500);
		};

		handleRouteChange();

		return () => {
			clearTimeout(handleRouteChange);
		};
	}, [location]);

	useEffect(() => {
		const hideLoader = () => {
			const loader = document.querySelector('.loader');
			if (loader) {
				loader.style.opacity = 0;
				setTimeout(() => {
					loader.style.display = 'none';
				}, 500);
			}
		};

		const showContent = () => {
			const content = document.querySelector('.content');
			if (content) {
				content.style.opacity = 1;
			}
		};

		if (!isLoading) {
			setTimeout(() => {
				hideLoader();
				showContent();
			}, 0);
		}
	}, [isLoading]);

	return (
		<div className="App">
			<div className={`loader ${isLoading ? 'show' : ''}`}>
				<NavBarLoadingSkeleton />
			</div>
			<div className={`content ${isLoading ? 'hide' : ''}`}>
				<div className="Navbar">{isLoading ? <PageLoadingSkeleton /> : <Navbar />}</div>
				{!isLoading && (
					<Routes location={location}>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/general-page" element={<GeneralPage />} />
						<Route path="/tickets/" element={<RefundRequestPage />} />
						<Route path="/tickets/purchase" element={<GetTicket />} />
						<Route path="/transacions" element={<Transactions />} />
						<Route path="/subscription" element={<ViewSubscription />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				)}
			</div>
		</div>
	);
}

export default App;


*/
