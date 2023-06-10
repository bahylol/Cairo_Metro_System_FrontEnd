import Footer from '../Footer/Footer.js';

import './manage_zones.css';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Zones = () => {
	const [zones, setZones] = useState([]);
	const [zonesPopup, setZonesPopup] = useState(false);
	const [price, setPrice] = useState(0);

	const handlePrice = (event) => {
		setPrice(event.target.value);
	};

	const handleChange = async () => {
		let requestId = localStorage.getItem('requestId');
		console.log(requestId);
		console.log(price);
		try {
			const response = await fetch(`http://localhost:3000/zones/${requestId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					token: `session_token=${localStorage.getItem('session_token')}`,
				},
				body: JSON.stringify({
					price: price,
				}),
			});
			const data = await response.json();
			if (data[0] === 200) {
				confirm(data[1]);
				fetchData();
				closeZonesPopup();
			} else {
				notify(data[1]);
				closeZonesPopup();
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const openZonesPopup = (id) => {
		localStorage.setItem('requestId', id);
		setZonesPopup(true);
	};

	const closeZonesPopup = () => {
		localStorage.setItem('requestId', '');
		setZonesPopup(false);
	};

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
	const fetchData = async () => {
		try {
			const response = await fetch('http://localhost:3000/zones', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					token: `session_token=${localStorage.getItem('session_token')}`,
				},
			});
			const data = await response.json();
			if (data[0] === 200) {
				setZones(data[1]);
			} else {
				notify(data[1]);
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const columns = [
		{ field: 'id', headerName: 'Zone ID', minWidth: 100, flex: 1 },
		{ field: 'minimumstations', headerName: 'Minimum Stations', minWidth: 180, flex: 1 },
		{ field: 'maximumstations', headerName: 'Maximum Stations', minWidth: 180, flex: 1 },
		{ field: 'price', headerName: 'Price', minWidth: 100, flex: 1 },
		{
			field: 'action',
			headerName: 'Accept/Reject',
			minWidth: 200,
			flex: 1,
			renderCell: (params) => (
				<Button
					variant="contained"
					style={{ backgroundColor: '#da2c43' }}
					onClick={() => openZonesPopup(params.id)}
					color="primary"
				>
					Update Price
				</Button>
			),
		},
	];

	const UpdatedZones = zones.map((zones) => {
		const { zone_id, ...rest } = zones;
		return { id: zone_id, ...rest };
	});

	const rows = UpdatedZones;

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
			{zonesPopup && (
				<div className="VSmodal">
					<div className="VSoverlay">
						<div className="VS-modal-form">
							<h2>Enter New Price</h2>
							<div className="VSmodal-Refundcolumn">
								<div className="SL-input-box">
									<input
										type="number"
										placeholder="Enter phone number"
										name="price"
										value={price}
										onChange={handlePrice}
										required
									/>
								</div>
								<Button
									variant="contained"
									style={{ backgroundColor: '#000000' }}
									onClick={closeZonesPopup}
								>
									Back
								</Button>
								<Button
									variant="contained"
									style={{ backgroundColor: '#da2c43' }}
									onClick={handleChange}
								>
									confirm
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
			<ToastContainer />
			<Footer />
		</>
	);
};

export default Zones;
