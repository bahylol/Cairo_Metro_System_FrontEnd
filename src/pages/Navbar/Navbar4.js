import React, { useState } from 'react';
import './Navbar4.css';

const Navbar = () => {
	const [activeItem, setActiveItem] = useState('one');

	const handleItemClick = (item) => {
		setActiveItem(item);
	};

	return (
		<div>
			<div className="speak">
				<span style={{ fontSize: '20px', fontWeight: 'bold' }}>WetroMetro</span>
			</div>
			<div
				className={`speak one ${activeItem === 'one' ? 'active' : ''}`}
				onClick={() => handleItemClick('one')}
			>
				<span>item one</span>
			</div>
			<div
				className={`speak two ${activeItem === 'two' ? 'active' : ''}`}
				onClick={() => handleItemClick('two')}
			>
				<span>item two</span>
			</div>
			<div
				className={`speak three ${activeItem === 'three' ? 'active' : ''}`}
				onClick={() => handleItemClick('three')}
			>
				<span>item three</span>
			</div>
			<div
				className={`speak four ${activeItem === 'four' ? 'active' : ''}`}
				onClick={() => handleItemClick('four')}
			>
				<span>item four</span>
			</div>
			<footer>
				Inspired by{' '}
				<a href="https://twitter.com/FWeinb" className="red">
					Fabrice Weinberg
				</a>
			</footer>
		</div>
	);
};

export default Navbar;
