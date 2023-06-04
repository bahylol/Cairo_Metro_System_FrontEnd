import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.js';
import Navbar from './pages/Navbar/Navbar.js';
import GeneralPage from './pages/General_Page/General_Page.js';
import Home from './pages/Home/Home.js';
import Signup from './pages/Signup-Login/Signup';
import Login from './pages/Signup-Login/Login';
import RefundRequestPage from './pages/Refund_Request/Refund_Request.js';
import GetTicket from './pages/Get_Ticket/Get_Ticket.js';
import Transactions from './pages/Transactions/Transactions.js';
import ViewSubscription from './pages/View_Subscription/view_subscription.js';
import Footer from './pages/Footer/Footer.js';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App />,
// 	},
// 	{
// 		path: '/login',
// 		element: <Login />,
// 	},
// 	{
// 		path: '/register',
// 		element: <Signup />,
// 	},
// 	{
// 		path: '/test',
// 		element: <RefundRequestPage />,
// 	},
// ]);
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<RouterProvider router={router} />);

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
