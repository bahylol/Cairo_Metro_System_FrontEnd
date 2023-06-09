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
		{ field: 'id', headerName: 'Transaction ID', type: 'number', minWidth: 150, flex: 1},
		{ field: 'amount', headerName: 'Amount', type: 'number', minWidth: 150, flex: 1 },
		{ field: 'trans_date', headerName: 'Date', minWidth: 180, flex: 1},
		{ field: 'transaction_to', headerName: 'Transaction type', minWidth: 150, flex: 1},
		/* UNCOMMENT TRANSACTION */
		// { field: 'card_type', headerName: 'Card Type', width: 170 },
		// { field: 'credit_card', headerName: 'Card Number', width: 220 },
		// { field: 'holder_name', headerName: 'Holder Name', width: 100 },
	];

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
			<DataGrid
				className="datagrid"
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
			/>

			<Footer />
		</>
	);
};

export default Transactions;
