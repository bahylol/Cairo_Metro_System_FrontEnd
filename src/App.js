import './App.css';
import Navbar from './pages/Navbar/Navbar2.js';
// import Footer from './pages/Footer/Footer.js';
import Home from './pages/Home/Home.js';
// import Signup from './pages/Signup-Login/Signup';
// import Login from './pages/Signup-Login/Login';
import Refund_Request_Page from './pages/Refund_Request/Refund_Request.js';
// import modal from './pages/Refund_Request/refund_request_modal.js';

function App() {
	return (
		<div className="App">
			<div className="Navbar">
				<Navbar />
				<div className="content">
					<Refund_Request_Page />
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

