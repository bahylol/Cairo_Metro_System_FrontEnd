import './App.css';
import Navbar from './pages/Navbar/Navbar2.js';
import Home from './pages/Home/Home.js';
// import Signup from './pages/Signup-Login/Signup';
// import Login from './pages/Signup-Login/Login';

function App() {
	return (
		<div className="App">
			<div className="Navbar">
				<Navbar />
				<div className="content">
					<Home />
				</div>
				{/* Footer */}
			</div>
		</div>
	);
}

// function App() {
// 	return (
// 		<div className="App">
// 			<Signup />
// 		</div>
// 	);
// }

export default App;

