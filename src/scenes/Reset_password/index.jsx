import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
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
		console.log(values);
		fetch('http://localhost:3000/api/v1/password/reset', {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
				token: `session_token=${localStorage.getItem('session_token')}`,
			},
			body: JSON.stringify({
				password: values.password,
				newpassword: values.newpassword,
			}),
		})
			.then((data) => {
				const { status } = data;
				if (status === 200) {
					confirm('changed');
				} else if (status === 401) {
					notify('Invalid Old Password');
				}
			})
			.catch((error) => console.error(error));
	};

	return (
		<Box m="20px">
			<Header title="Reset Password" subtitle="Update your Password here !" />

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
								type="password"
								label="Old Password"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.password}
								name="password"
								error={!!touched.password && !!errors.password}
								helperText={touched.password && errors.password}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="Password"
								label="New Password"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.newpassword}
								name="newpassword"
								error={!!touched.newpassword && !!errors.newpassword}
								helperText={touched.newpassword && errors.newpassword}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="password"
								label="Confirm your password"
								onBlur={handleBlur}
								onChange={handleChange}
								name="newpassword2"
								error={!!touched.newpassword2 && !!errors.newpassword2}
								helperText={touched.newpassword2 && errors.newpassword2}
								sx={{ gridColumn: 'span 4' }}
							/>
						</Box>
						<Box display="flex" justifyContent="end" mt="20px">
							<Button
								type="submit"
								color="secondary"
								variant="contained"
								style={{ margin: '0 auto' }}
							>
								Update Password
							</Button>
						</Box>
					</form>
				)}
			</Formik>
			<ToastContainer />
		</Box>
	);
};

const phoneRegExp =
	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
	password: yup.string().required('required'),
	newpassword: yup
		.string()
		.min(8, 'Password must be at least 8 characters long')
		.required('required'),
	newpassword2: yup
		.string()
		.oneOf([yup.ref('newpassword'), null], 'Passwords must match')
		.required('required'),
});
const initialValues = {
	password: '',
	newpassword: '',
	newpassword2: '',
};

export default Form;
