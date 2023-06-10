import Footer from '../Footer/Footer.js';

import './AdminManageRequests.css';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import 'react-toastify/dist/ReactToastify.css';

const AdminManageRequests = () => {
	const navigate = useNavigate();
	const confirm = (alert) => {
		toast.success(alert, {
			position: 'top-center',
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};
	const notify = (alert) => {
		toast.error(alert, {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};
	if (localStorage.getItem('session_token') === 'null') {
		notify('You are not logged in');
		setTimeout(function () {
			navigate('/');
		}, 2501);
	}
	const [seniorRequests, setSeniorRequests] = useState([]);
	const [refundRequests, setRefundRequests] = useState([]);
	const [seniorPopup, setSeniorPopup] = useState(false);
	const [refundPopup, setRefundPopup] = useState(false);

	const openSeniorPopup = (id) => {
		localStorage.setItem('requestId', id);
		setSeniorPopup(true);
	};

	const closeSeniorPopup = () => {
		localStorage.setItem('requestId', '');
		setSeniorPopup(false);
	};
	const openRefundPopup = (id) => {
		localStorage.setItem('requestId', id);
		setRefundPopup(true);
	};

	const closeRefundPopup = () => {
		localStorage.setItem('requestId', '');
		setRefundPopup(false);
	};
	const acceptSenior = async () => {
		let requestId = localStorage.getItem('requestId');
		try {
			const response = await fetch(`http://localhost:3000/api/v1/requests/senior/${requestId}`, {
				method: 'Put',
				headers: {
					'Content-Type': 'application/json',
					token: `session_token=${localStorage.getItem('session_token')}`,
				},
				body: JSON.stringify({
					request_state: 'accepted',
				}),
			});
			const data = await response.json();
			if (data[0] === 200) {
				confirm(data[1]);
				fetchSenior();
			} else {
				notify(data[1]);
			}
			closeSeniorPopup();
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const rejectSenior = async () => {
		let requestId = localStorage.getItem('requestId');
		try {
			const response = await fetch(`http://localhost:3000/api/v1/requests/senior/${requestId}`, {
				method: 'Put',
				headers: {
					'Content-Type': 'application/json',
					token: `session_token=${localStorage.getItem('session_token')}`,
				},
				body: JSON.stringify({
					request_state: 'rejected',
				}),
			});
			const data = await response.json();
			if (data[0] === 200) {
				confirm(data[1]);
				fetchSenior();
			} else {
				notify(data[1]);
			}
			closeSeniorPopup();
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const acceptRefund = async () => {
		let requestId = localStorage.getItem('requestId');
		try {
			const response = await fetch(
				`http://localhost:3000/api/v1/requests/refunds/${requestId}`,
				{
					method: 'Put',
					headers: {
						'Content-Type': 'application/json',
						token: `session_token=${localStorage.getItem('session_token')}`,
					},
					body: JSON.stringify({
						request_state: 'accepted',
					}),
				}
			);
			const data = await response.json();
			if (data[0] === 200) {
				confirm(data[1]);
				fetchRefund();
			} else {
				notify(data[1]);
			}
			closeRefundPopup();
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const rejectRefund = async () => {
		let requestId = localStorage.getItem('requestId');
		try {
			const response = await fetch(
				`http://localhost:3000/api/v1/requests/refunds/${requestId}`,
				{
					method: 'Put',
					headers: {
						'Content-Type': 'application/json',
						token: `session_token=${localStorage.getItem('session_token')}`,
					},
					body: JSON.stringify({
						request_state: 'rejected',
					}),
				}
			);
			const data = await response.json();
			if (data[0] === 200) {
				confirm(data[1]);
				fetchRefund();
			} else {
				notify(data[1]);
			}
			closeRefundPopup();
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

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
			} else {
				notify(data[1]);
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

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
			} else {
				notify(data[1]);
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		fetchSenior();
	}, []);

	useEffect(() => {
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
				<Button
					variant="contained"
					style={{ backgroundColor: '#da2c43' }}
					onClick={() => openSeniorPopup(params.id)}
					color="primary"
					startIcon={<CheckCircleSharpIcon />}
					endIcon={<CancelSharpIcon />}
				>
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
				<Button
					variant="contained"
					style={{ backgroundColor: '#da2c43' }}
					onClick={() => openRefundPopup(params.id)}
					color="primary"
					startIcon={<CheckCircleSharpIcon />}
					endIcon={<CancelSharpIcon />}
				>
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
				<div className="request-TP-table" style={{ height: 400, width: '100%' }}>
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
			{seniorPopup && (
				<div className="AMRmodal">
					<div className="AMRoverlay">
						<div className="AMR-modal-form">
							<h2>Accept/Reject this Senior Request?</h2>
							<div className="AMRmodal-Refundcolumn">
								<Button
									variant="contained"
									style={{ backgroundColor: '#000000' }}
									onClick={closeSeniorPopup}
								>
									Back
								</Button>
								<Button
									variant="contained"
									style={{ backgroundColor: '#00ff00' }}
									onClick={acceptSenior}
									startIcon={<CheckCircleSharpIcon />}
								></Button>
								<Button
									variant="contained"
									style={{ backgroundColor: '#ff0000' }}
									onClick={rejectSenior}
									startIcon={<CancelSharpIcon />}
								></Button>
							</div>
						</div>
					</div>
				</div>
			)}
			{refundPopup && (
				<div className="AMRmodal">
					<div className="AMRoverlay">
						<div className="AMR-modal-form">
							<h2>Accept/Reject this Refund Request?</h2>
							<p>--Caneling, will lead to the loss of your remaining ticket-usages--</p>
							<div className="AMRmodal-Refundcolumn">
								<Button
									variant="contained"
									style={{ backgroundColor: '#000000' }}
									onClick={closeRefundPopup}
								>
									Back
								</Button>
								<Button
									variant="contained"
									style={{ backgroundColor: '#00ff00' }}
									onClick={acceptRefund}
									startIcon={<CheckCircleSharpIcon />}
								></Button>
								<Button
									variant="contained"
									style={{ backgroundColor: '#ff0000' }}
									onClick={rejectRefund}
									startIcon={<CancelSharpIcon />}
								></Button>
							</div>
						</div>
					</div>
				</div>
			)}
			<Footer />
			<ToastContainer />
		</>
	);
};

export default AdminManageRequests;
