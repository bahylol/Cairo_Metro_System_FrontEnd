import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

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
			}, 1000);
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

	// useEffect(() => {
	// 	const cancelRouteChange = (e) => {
	// 		if (e.currentTarget.pathname === location.pathname) {
	// 			e.preventDefault();
	// 		}
	// 	};

	// 	const links = document.querySelectorAll('a');
	// 	links.forEach((link) => {
	// 		link.addEventListener('click', cancelRouteChange);
	// 	});

	// 	return () => {
	// 		links.forEach((link) => {
	// 			link.removeEventListener('click', cancelRouteChange);
	// 		});
	// 	};
	// }, [location]);

	return (
		<div className="App">
			<div className={`content ${isLoading ? 'hide' : ''}`}>
				<div className="Navbar">{isLoading ? <NavBarLoadingSkeleton /> : <Navbar />}</div>
				<div className="Page">
					{isLoading ? (
						<PageLoadingSkeleton />
					) : (
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
		</div>
	);
}

export default App;
