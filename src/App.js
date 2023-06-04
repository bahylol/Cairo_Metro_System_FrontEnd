import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

function App() {
	return (
		<div className="App">
			<div className="Navbar">
				<Navbar />
				<div className="content">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/signup" element={<Signup />} />
						{/* <Route path="*" element={<NotFound/>}/> */}
					</Routes>
				</div>
			</div>
		</div>
	);
}

// function App() {
// 	return (
// 		<div className="App">
// 			<Footer />
// 		</div>
// 	);
// }

export default App;
