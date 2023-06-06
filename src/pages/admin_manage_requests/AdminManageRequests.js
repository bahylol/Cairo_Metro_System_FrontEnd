import Footer from '../Footer/Footer.js';

import './AdminManageRequests.css';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import 'react-toastify/dist/ReactToastify.css';

const AdminManageRequests = () => {
	const navigate = useNavigate();
	const notify = (alert) => {
		toast.error(alert, {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	};
	if (localStorage.getItem('session_token') === "null") {
		notify("You are not logged in");
		setTimeout(function () {
			navigate('/');
		}, 2501);
	}
	const [seniorRequests, setSeniorRequests] = useState([]);
	const [refundRequests, setRefundRequests] = useState([]);
	useEffect(() => {
		const fetchSenior = async () => {
			try {
				const response = await fetch('http://localhost:3000/api/v1/requests/getsenior', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						token: `session_token=${localStorage.getItem('session_token')}`,
					},
				});
				const data = await response.json();
				if (data[0] === 200) {
					setSeniorRequests(data[1]);
				}
				else {
					notify(data[1]);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchSenior();
	}, []);

	useEffect(() => {
		const fetchRefund = async () => {
			try {
				const response = await fetch('http://localhost:3000/api/v1/requests/getrefund', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						token: `session_token=${localStorage.getItem('session_token')}`,
					},
				});
				const data = await response.json();
				if (data[0] === 200) {
					setRefundRequests(data[1]);
				}
				else {
					notify(data[1]);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchRefund();
	}, []);

	const seniorColumns = [
		{ field: 'id', headerName: 'Request ID', flex: 1 },
		{ field: 'request_state', headerName: 'request_state', minWidth: 150, flex: 1 },
		{ field: 'id_picture_age', headerName: 'SSN', flex: 1 },
		{ field: 'admin_id', headerName: 'Admin ID', flex: 1 },
		{ field: 'user_id', headerName: 'User ID', flex: 1 },
		{
			field: 'action',
			headerName: 'Accept/Reject',
			minWidth: 200,
			flex: 1,
			renderCell: (params) => (
				<Button variant="contained" onClick={() => console.log(params.id)} color="primary" startIcon={<CheckCircleSharpIcon />} endIcon={<CancelSharpIcon />}>
					Accept/Reject
				</Button>
			),
		},
	];

	const UpdatedSeniorData = seniorRequests.map((seniorRequests) => {
		const { request_id, ...rest } = seniorRequests;
		return { id: request_id, ...rest };
	});

	const seniorRows = UpdatedSeniorData;

	const refundColumns = [
		{ field: 'id', headerName: 'Request ID', flex: 1 },
		{ field: 'request_state', headerName: 'request_state', minWidth: 150, flex: 1 },
		{ field: 'description', headerName: 'description', minWidth: 150, flex: 1 },
		{ field: 'ticket_id', headerName: 'ticket_id', flex: 1 },
		{ field: 'admin_id', headerName: 'Admin ID', flex: 1 },
		{ field: 'user_id', headerName: 'User ID', flex: 1 },
		{
			field: 'action',
			headerName: 'Accept/Reject',
			minWidth: 200,
			flex: 1,
			renderCell: (params) => (
				<Button variant="contained" onClick={() => console.log(params.id)} color="primary" startIcon={<CheckCircleSharpIcon />} endIcon={<CancelSharpIcon />}>
					Accept/Reject
				</Button>
			),
		},
	];

	const UpdatedRefundData = refundRequests.map((refundRequests) => {
		const { request_id, ...rest } = refundRequests;
		return { id: request_id, ...rest };
	});

	const refundRows = UpdatedRefundData;
	return (
		<>
			<div className="request-TP-page">
				<header>Senior Requests</header>
				<div className="request-TP-table" style={{ height: 400, width: '100%' }} >
					<DataGrid
						rows={seniorRows}
						columns={seniorColumns}
						initialState={{
							pagination: {
								paginationModel: { page: 0, pageSize: 5 },
							},
						}}
						pageSizeOptions={[5, 10]}
						// slots={{
						// 	toolbar: GridToolbar,
						//   }}
						// slots={{
						// 	noRowsOverlay: CustomNoRowsOverlay,
						//   }}
						//   {...data}
						//   rows={[]}
					/>
				</div>
			</div>
			<div className="request-TP-page">
				<header>Refund Requests</header>
				<div className="request-TP-table" style={{ height: 400, width: '100%' }}>
					<DataGrid
						rows={refundRows}
						columns={refundColumns}
						initialState={{
							pagination: {
								paginationModel: { page: 0, pageSize: 5 },
							},
						}}
						pageSizeOptions={[5, 10]}
					/>
				</div>
			</div>
			<Footer />
			<ToastContainer />
		</>
	);
};

export default AdminManageRequests;

