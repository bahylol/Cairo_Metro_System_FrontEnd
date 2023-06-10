import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SeniorForm = () => {
	const navigate = useNavigate();
	const [ageEntered, setAgeEntered] = useState('');

	const isNonMobile = useMediaQuery('(min-width:600px)');
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
	const handleFormSubmit = (values) => {
		if (ageEntered === '') {
			notify('Please provide your age');
		} else {
			console.log(values);
			fetch('http://localhost:3000/api/v1/senior/request', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					token: `session_token=${localStorage.getItem('session_token')}`,
				},
				body: JSON.stringify({
					ID_picture_age: values.senRequest,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					// localStorage.setItem('session_token', data[0]);
					if (data[0] === 200) {
						confirm('Request successfully sent');
					} else if (data[0] === 401) {
						notify('You already applied for a senior request');
					} else if (data[0] === 402) {
						notify('You already are a senior');
					}
				})
				.catch((error) => notify('ERRORR'));
		}
	};

	return (
		<Box m="20px">
			<Header title="Senior Request" subtitle="Apply for your senior request now!" />

			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchema={checkoutSchema}
			>
				{({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<Box
							display="grid"
							gap="30px"
							gridTemplateColumns="repeat(4, minmax(0, 1fr))"
							sx={{
								'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
							}}
						>
							<TextField
								fullWidth
								variant="filled"
								type="number"
								label="Your Age"
								onBlur={handleBlur}
								onChange={(event) => {
									handleChange(event);
									setAgeEntered(event.target.value);
								}}
								value={values.senRequest}
								name="senRequest"
								sx={{ gridColumn: 'span 4' }}
							/>
						</Box>
						<Box display="flex" justifyContent="end" mt="20px">
							<Button
								type="submit"
								color="secondary"
								variant="contained"
								style={{ margin: '0 auto' }}
								onClick={handleFormSubmit}
							>
								Send Request
							</Button>
						</Box>
					</form>
				)}
			</Formik>
			<ToastContainer />
		</Box>
	);
};

const checkoutSchema = yup.object().shape({
	senRequest: yup.string().required('required'),
});
const initialValues = {
	senRequest: '',
};

export default SeniorForm;
