// import React, { useState } from 'react';
// import '../css_files/Navbar.css';

// const Navbar = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggleMenu = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	const handleSubmenuClick = (event) => {
// 		event.stopPropagation();
// 		event.preventDefault();
// 		const submenu = event.target.nextSibling;
// 		submenu.classList.toggle('show');
// 	};

// 	return (
// 		<div className="menu-container">
// 			<div className="menu">
// 				<a href="#" className="logo">
// 					Logo
// 				</a>
// 				<ul className={isOpen ? 'clearfix show' : 'clearfix'}>
// 					<li>
// 						<a href="#">Home</a>
// 					</li>
// 					<li>
// 						<a href="#" onClick={handleSubmenuClick}>
// 							About
// 						</a>
// 						<ul className="submenu">
// 							<li>
// 								<a href="#" onClick={handleSubmenuClick}>
// 									School
// 								</a>
// 								<ul className="submenu">
// 									<li>
// 										<a href="#">Leadership</a>
// 									</li>
// 									<li>
// 										<a href="#">History</a>
// 									</li>
// 									<li>
// 										<a href="#">Locations</a>
// 									</li>
// 									<li>
// 										<a href="#">Careers</a>
// 									</li>
// 								</ul>
// 							</li>
// 							<li>
// 								<a href="#" onClick={handleSubmenuClick}>
// 									Study
// 								</a>
// 								<ul className="submenu">
// 									<li>
// 										<a href="#">Undergraduate</a>
// 									</li>
// 									<li>
// 										<a href="#">Masters</a>
// 									</li>
// 									<li>
// 										<a href="#">International</a>
// 									</li>
// 									<li>
// 										<a href="#">Online</a>
// 									</li>
// 								</ul>
// 							</li>
// 							<li>
// 								<a href="#" onClick={handleSubmenuClick}>
// 									Research
// 								</a>
// 								<ul className="submenu">
// 									<li>
// 										<a href="#">Undergraduate research</a>
// 									</li>
// 									<li>
// 										<a href="#">Masters research</a>
// 									</li>
// 									<li>
// 										<a href="#">Funding</a>
// 									</li>
// 								</ul>
// 							</li>
// 							<li>
// 								<a href="#" onClick={handleSubmenuClick}>
// 									Something
// 								</a>
// 								<ul className="submenu">
// 									<li>
// 										<img src="https://placeimg.com/300/200/nature" alt="Nature" />
// 									</li>
// 								</ul>
// 							</li>
// 						</ul>
// 					</li>
// 					<li>
// 						<a href="#" onClick={handleSubmenuClick}>
// 							News
// 						</a>
// 						<ul className="submenu">
// 							<li>
// 								<a href="#">Today</a>
// 							</li>
// 							<li>
// 								<a href="#">Calendar</a>
// 							</li>
// 							<li>
// 								<a href="#">Sport</a>
// 							</li>
// 						</ul>
// 					</li>
// 					<li>
// 						<a href="#" onClick={handleSubmenuClick}>
// 							Contact
// 						</a>
// 						<ul className="submenu">
// 							<li>
// 								<a href="#" onClick={handleSubmenuClick}>
// 									School
// 								</a>
// 								<ul className="submenu">
// 									<li>
// 										<a href="#">Leadership</a>
// 									</li>
// 									<li>
// 										<a href="#">History</a>
// 									</li>
// 									<li>
// 										<a href="#">Locations</a>
// 									</li>
// 									<li>
// 										<a href="#">Careers</a>
// 									</li>
// 								</ul>
// 							</li>
// 							<li>
// 								<a href="#" onClick={handleSubmenuClick}>
// 									Study
// 								</a>
// 								<ul className="submenu">
// 									<li>
// 										<a href="#">Undergraduate</a>
// 									</li>
// 									<li>
// 										<a href="#">Masters</a>
// 									</li>
// 									<li>
// 										<a href="#">International</a>
// 									</li>
// 									<li>
// 										<a href="#">Online</a>
// 									</li>
// 								</ul>
// 							</li>
// 							<li>
// 								<a href="#" onClick={handleSubmenuClick}>
// 									Research
// 								</a>
// 								<ul className="submenu">
// 									<li>
// 										<a href="#">Undergraduate research</a>
// 									</li>
// 									<li>
// 										<a href="#">Masters research</a>
// 									</li>
// 									<li>
// 										<a href="#">Funding</a>
// 									</li>
// 								</ul>
// 							</li>
// 							<li>
// 								<a href="#" onClick={handleSubmenuClick}>
// 									Something
// 								</a>
// 								<ul className="submenu">
// 									<li>
// 										<img src="https://placeimg.com/300/200/nature" alt="Nature" />
// 									</li>
// 								</ul>
// 							</li>
// 						</ul>
// 					</li>
// 				</ul>
// 				<div className="hamburger" onClick={toggleMenu}>
// 					<div className={isOpen ? 'line line-1' : 'line'}></div>
// 					<div className={isOpen ? 'line line-2' : 'line'}></div>
// 					<div className={isOpen ? 'line line-3' : 'line'}></div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;
