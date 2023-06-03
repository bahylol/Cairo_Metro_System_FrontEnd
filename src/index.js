import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './pages/Signup-Login/Signup';
import Login from './pages/Signup-Login/Login';
import RefundRequestPage from './pages/Refund_Request/Refund_Request.js';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/register",
		element: <Signup />
	},
	{
		path: "/test",
		element: <RefundRequestPage />
	}
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

