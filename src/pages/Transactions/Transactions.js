import Footer from '../Footer/Footer.js';

import './Transactions.css';

import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';

const Transactions = () => {
	const [transactionData, setTransactionData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3000/api/v1/users/transactions', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						token: `session_token=${localStorage.getItem('session_token')}`,
					},
				});
				const data = await response.json();
				setTransactionData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	const columns = [
		{ field: 'id', headerName: 'Transaction ID', type: 'number', width: 120 },
		{ field: 'amount', headerName: 'Amount', type: 'number', width: 130 },
		{ field: 'trans_date', headerName: 'Date', width: 280 },
		{ field: 'card_type', headerName: 'Card Type', width: 170 },
		{ field: 'credit_card', headerName: 'Card Number', width: 220 },
		{ field: 'holder_name', headerName: 'Holder Name', width: 100 },
	];

	// const transactionData = [
	// 	{
	// 		trans_id: 1,
	// 		amount: 1000,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Visa',
	// 		credit_card: 183568373548363555,
	// 		holder_name: 'Joe',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 2,
	// 		amount: 2050,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Credit Card',
	// 		credit_card: 183568373548363555,
	// 		holder_name: 'Ahmed',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 3,
	// 		amount: 760,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Visa',
	// 		credit_card: 19990367444725355,
	// 		holder_name: 'Joe',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 4,
	// 		amount: 10000,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Credit Card',
	// 		credit_card: 1999333344445555,
	// 		holder_name: 'Joe',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 5,
	// 		amount: 140000,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Visa',
	// 		credit_card: 19947473402836555,
	// 		holder_name: 'Bahy',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 6,
	// 		amount: 1000,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Visa',
	// 		credit_card: 183568373548363555,
	// 		holder_name: 'Joe',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 7,
	// 		amount: 2050,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Credit Card',
	// 		credit_card: 183568373548363555,
	// 		holder_name: 'Ahmed',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 8,
	// 		amount: 760,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Visa',
	// 		credit_card: 19990367444725355,
	// 		holder_name: 'Joe',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 9,
	// 		amount: 10000,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Credit Card',
	// 		credit_card: 1999333344445555,
	// 		holder_name: 'Joe',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 10,
	// 		amount: 140000,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Visa',
	// 		credit_card: 19947473402836555,
	// 		holder_name: 'Bahy',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 11,
	// 		amount: 1000,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Visa',
	// 		credit_card: 183568373548363555,
	// 		holder_name: 'Joe',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 12,
	// 		amount: 2050,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Credit Card',
	// 		credit_card: 183568373548363555,
	// 		holder_name: 'Ahmed',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 13,
	// 		amount: 760,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Visa',
	// 		credit_card: 19990367444725355,
	// 		holder_name: 'Joe',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 14,
	// 		amount: 10000,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Credit Card',
	// 		credit_card: 1999333344445555,
	// 		holder_name: 'Joe',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 15,
	// 		amount: 140000,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Visa',
	// 		credit_card: 19947473402836555,
	// 		holder_name: 'Bahy',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 16,
	// 		amount: 1000,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Visa',
	// 		credit_card: 183568373548363555,
	// 		holder_name: 'Joe',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 17,
	// 		amount: 2050,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Credit Card',
	// 		credit_card: 183568373548363555,
	// 		holder_name: 'Ahmed',
	// 		user_id: 1,
	// 	},
	// 	{
	// 		trans_id: 18,
	// 		amount: 760,
	// 		transaction_to: 'payment',
	// 		trans_date: '1999-12-30T22:00:00.000Z',
	// 		card_type: 'Visa',
	// 		credit_card: 19990367444725355,
	// 		holder_name: 'Joe',
	// 		user_id: 1,
	// 	},
	// ];
	const updatedTransactionData = transactionData.map((transaction) => {
		const transactionDate = new Date(transaction.trans_date);
		const formattedDate = transactionDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		const { trans_id, ...rest } = transaction;
		return { id: trans_id, ...rest, trans_date: formattedDate };
	});

	const rows = updatedTransactionData;

	return (
		<>
			<div className="transactions-TP-page">
				<header>Your Transactions</header>
				<div className="transaction-TP-table" style={{ height: 400, width: '100%' }}>
					<DataGrid
						rows={rows}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel: { page: 0, pageSize: 5 },
							},
						}}
						pageSizeOptions={[5, 10]}
						checkboxSelection
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Transactions;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { useTable } from 'react-table';
// import './Transactions.css';

// const Transactions = () => {
// 	const [transactionsData, setTransactionsData] = useState([
// 		{
// 			trans_id: 1,
// 			amount: 1000,
// 			transaction_to: 'payment',
// 			trans_date: '1999-12-30T22:00:00.000Z',
// 			card_type: 'Visa',
// 			credit_card: 183568373548363555,
// 			holder_name: 'Joe',
// 			user_id: 1,
// 		},
// 		{
// 			trans_id: 2,
// 			amount: 2050,
// 			transaction_to: 'payment',
// 			trans_date: '1999-12-30T22:00:00.000Z',
// 			card_type: 'Credit Card',
// 			credit_card: 183568373548363555,
// 			holder_name: 'Ahmed',
// 			user_id: 1,
// 		},
// 		{
// 			trans_id: 3,
// 			amount: 760,
// 			transaction_to: 'payment',
// 			trans_date: '1999-12-30T22:00:00.000Z',
// 			card_type: 'Visa',
// 			credit_card: 19990367444725355,
// 			holder_name: 'Joe',
// 			user_id: 1,
// 		},
// 		{
// 			trans_id: 4,
// 			amount: 10000,
// 			transaction_to: 'payment',
// 			trans_date: '1999-12-30T22:00:00.000Z',
// 			card_type: 'Credit Card',
// 			credit_card: 1999333344445555,
// 			holder_name: 'Joe',
// 			user_id: 1,
// 		},
// 		{
// 			trans_id: 5,
// 			amount: 140000,
// 			transaction_to: 'payment',
// 			trans_date: '1999-12-30T22:00:00.000Z',
// 			card_type: 'Visa',
// 			credit_card: 19947473402836555,
// 			holder_name: 'Bahy',
// 			user_id: 1,
// 		},
// 	]);

// 	return (
// 		<div className="transactions-TP-page">
// 			<div className="transaction-table">
// 				<table>
// 					<tr>
// 						<th>Transaction ID</th>
// 						<th>Amount</th>
// 						<th>Date</th>
// 						<th>Card Type</th>
// 						<th>Card Number</th>
// 						<th>Holder Name</th>
// 					</tr>
// 					{transactionsData.map((val, key) => {
// 						return (
// 							<tr key={key}>
// 								<td>{val.trans_id}</td>
// 								<td>{val.amount}</td>
// 								<td>{val.trans_date}</td>
// 								<td>{val.card_type}</td>
// 								<td>{val.credit_card}</td>
// 								<td>{val.holder_name}</td>
// 							</tr>
// 						);
// 					})}
// 				</table>
// 			</div>
// 		</div>
// 	);
// };

// export default Transactions;
