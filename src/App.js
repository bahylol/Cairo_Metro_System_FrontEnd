import './App.css';
import Navbar from './pages/Navbar/Navbar2.js';
import Footer from './pages/Footer/Footer.js';
import Home from './pages/Home/Home.js';
import Signup from './pages/Signup-Login/Signup';
import Login from './pages/Signup-Login/Login';
import RefundRequestPage from './pages/Refund_Request/Refund_Request.js';
import GetTicket from './pages/Get_Ticket/Get_Ticket.js';
import General_Page from './pages/General_Page/General_Page.js';

function App() {
	return (
		<div className="App">
			<div className="Navbar">
				<Navbar />
				<div className="content">
					<General_Page />
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

