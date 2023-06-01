import { useState } from 'react';

const Transactions = () => {
	const [ticketsData, setTicketsData] = useState([
		{
			trans_id: 1,
			amount: 140000,
			transaction_to: 'payment',
			trans_date: '1999-12-30T22:00:00.000Z',
			card_type: 'Visa',
			credit_card: 1,
			holder_name: 'holder1',
			user_id: 1,
		},
		{
			trans_id: 2,
			amount: 140000,
			transaction_to: 'payment',
			trans_date: '1999-12-30T22:00:00.000Z',
			card_type: 'Visa',
			credit_card: 1,
			holder_name: 'holder1',
			user_id: 1,
		},
		{
			trans_id: 3,
			amount: 140000,
			transaction_to: 'payment',
			trans_date: '1999-12-30T22:00:00.000Z',
			card_type: 'Visa',
			credit_card: 1,
			holder_name: 'holder1',
			user_id: 1,
		},
		{
			trans_id: 4,
			amount: 140000,
			transaction_to: 'payment',
			trans_date: '1999-12-30T22:00:00.000Z',
			card_type: 'Visa',
			credit_card: 2,
			holder_name: 'holder1',
			user_id: 1,
		},
		{
			trans_id: 5,
			amount: 140000,
			transaction_to: 'payment',
			trans_date: '1999-12-30T22:00:00.000Z',
			card_type: 'Visa',
			credit_card: 2,
			holder_name: 'holder1',
			user_id: 1,
		},
	]);

	return <div className="transactions-TP-page">Transactions</div>;
};

export default Transactions;
