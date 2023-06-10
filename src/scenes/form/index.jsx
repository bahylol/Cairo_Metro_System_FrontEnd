// import { Box, Button, TextField } from '@mui/material';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Header from '../../components/Header';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { useState } from 'react';

// const Form = () => {
// 	const notify = (alert) => {
// 		toast.error(alert, {
// 			position: 'top-center',
// 			autoClose: 3000,
// 			hideProgressBar: false,
// 			closeOnClick: true,
// 			pauseOnHover: true,
// 			draggable: true,
// 			progress: undefined,
// 			theme: 'colored',
// 		});
// 	};
// 	const confirm = (alert) => {
// 		toast.success(alert, {
// 			position: 'top-center',
// 			autoClose: 2500,
// 			hideProgressBar: false,
// 			closeOnClick: true,
// 			pauseOnHover: true,
// 			draggable: true,
// 			progress: undefined,
// 			theme: 'colored',
// 		});
// 	};
// 	const [username, setUsername] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [birthdate, setBirthdate] = useState('');
// 	const [gender, setGender] = useState('');
// 	const [phone, setPhone] = useState('');
// 	const [ssn, setSsn] = useState('');
// 	const [usertype, setUsertype] = useState('');
// 	const [userrole, setUserrole] = useState('');

// 	const isNonMobile = useMediaQuery('(min-width:600px)');

// 	const handleFormSubmit = (values) => {
// 		fetch('http://localhost:3000/api/v1/superadmin/registeradmin', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				username: values.firstName,
// 				email: values.email,
// 				password: values.password,
// 				birthdate: values.birthdate,
// 				phone: values.phone,
// 				gender: values.gender,
// 				ssn: values.ssn,
// 				usertype: values.usertype,
// 				userrole: values.userrole,
// 			}),
// 		})
// 			.then((response) => {
// 				response.json();
// 			})
// 			.then((data) => {
// 				console.log('HEREE');
// 				const { status } = data;
// 				console.log(status);

// 				if (status === 200) {
// 					confirm('Successfully created new user!');
// 				} else if (status === 401) {
// 					notify('A user with that email already exists!');
// 				} else if (status === 400) {
// 					notify('Unable to create user!');
// 				}
// 			})
// 			.catch((error) => {
// 				notify(error.message);
// 			});
// 	};

// 	return (
// 		<Box m="20px">
// 			<Header title="CREATE USER" subtitle="Create a New User Profile" />

// 			<Formik
// 				onSubmit={handleFormSubmit}
// 				initialValues={initialValues}
// 				validationSchema={checkoutSchema}
// 			>
// 				{({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
// 					<form onSubmit={handleSubmit}>
// 						<Box
// 							display="grid"
// 							gap="30px"
// 							gridTemplateColumns="repeat(4, minmax(0, 1fr))"
// 							sx={{
// 								'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
// 							}}
// 						>
// 							<TextField
// 								fullWidth
// 								variant="filled"
// 								type="text"
// 								label="First Name"
// 								onBlur={handleBlur}
// 								onChange={handleChange}
// 								// onChange={(event) => setUsername(event.target.value)}
// 								value={values.firstName}
// 								name="firstName"
// 								error={!!touched.firstName && !!errors.firstName}
// 								helpertext={touched.firstName && errors.firstName}
// 								sx={{ gridColumn: 'span 2' }}
// 							/>
// 							<TextField
// 								fullWidth
// 								variant="filled"
// 								type="text"
// 								label="Last Name"
// 								onBlur={handleBlur}
// 								onChange={handleChange}
// 								value={values.lastName}
// 								name="lastName"
// 								error={!!touched.lastName && !!errors.lastName}
// 								helpertext={touched.lastName && errors.lastName}
// 								sx={{ gridColumn: 'span 2' }}
// 							/>
// 							<TextField
// 								fullWidth
// 								variant="filled"
// 								type="text"
// 								label="Email"
// 								onBlur={handleBlur}
// 								onChange={handleChange}
// 								// onChange={(event) => setEmail(event.target.value)}
// 								value={values.email}
// 								name="email"
// 								error={!!touched.email && !!errors.email}
// 								helpertext={touched.email && errors.email}
// 								sx={{ gridColumn: 'span 4' }}
// 							/>
// 							<TextField
// 								fullWidth
// 								variant="filled"
// 								type="text"
// 								label="Contact Number"
// 								onBlur={handleBlur}
// 								onChange={handleChange}
// 								// onChange={(event) => setPhone(event.target.value)}
// 								value={values.contact}
// 								name="contact"
// 								error={!!touched.contact && !!errors.contact}
// 								helpertext={touched.contact && errors.contact}
// 								sx={{ gridColumn: 'span 4' }}
// 							/>
// 							<TextField
// 								fullWidth
// 								variant="filled"
// 								type="password"
// 								label="Password"
// 								onBlur={handleBlur}
// 								onChange={handleChange}
// 								// onChange={(event) => setPassword(event.target.value)}
// 								value={values.Password}
// 								name="Password"
// 								error={!!touched.Password && !!errors.Password}
// 								helpertext={touched.Password && errors.Password}
// 								sx={{ gridColumn: 'span 4' }}
// 							/>

// 							<TextField
// 								fullWidth
// 								variant="filled"
// 								type="date"
// 								// label="birthdate"
// 								onBlur={handleBlur}
// 								onChange={handleChange}
// 								// onChange={(event) => setBirthdate(event.target.value)}
// 								value={values.birthdate}
// 								name="birthdate"
// 								error={!!touched.birthdate && !!errors.birthdate}
// 								helpertext={touched.birthdate && errors.birthdate}
// 								sx={{ gridColumn: 'span 5' }}
// 							/>
// 							<FormControl fullWidth variant="filled">
// 								<InputLabel id="gender-label">Gender</InputLabel>
// 								<Select
// 									labelId="gender-label"
// 									id="gender-select"
// 									value={values.gender}
// 									name="gender"
// 									onBlur={handleBlur}
// 									onChange={handleChange}
// 									// onChange={(event) => setGender(event.target.value)}
// 									error={!!touched.gender && !!errors.gender}
// 									helpertext={touched.gender && errors.gender}
// 								>
// 									<MenuItem value="M">Male</MenuItem>
// 									<MenuItem value="F">Female</MenuItem>
// 								</Select>{' '}
// 							</FormControl>

// 							<FormControl fullWidth variant="filled">
// 								<InputLabel id="type-label">Type</InputLabel>
// 								<Select
// 									labelId="type-label"
// 									id="type-select"
// 									value={values.type}
// 									name="type"
// 									onBlur={handleBlur}
// 									onChange={handleChange}
// 									// onChange={(event) => setUsertype(event.target.value)}
// 									error={!!touched.type && !!errors.type}
// 									helpertext={touched.type && errors.type}
// 								>
// 									<MenuItem value="normal">Normal</MenuItem>
// 									<MenuItem value="senior">Senior</MenuItem>
// 								</Select>{' '}
// 							</FormControl>

// 							<FormControl fullWidth variant="filled">
// 								<InputLabel id="role-label">Role</InputLabel>
// 								<Select
// 									labelId="role-label"
// 									id="role-select"
// 									value={values.role}
// 									name="role"
// 									onBlur={handleBlur}
// 									onChange={handleChange}
// 									// onChange={(event) => setUserrole(event.target.value)}
// 									error={!!touched.role && !!errors.role}
// 									helpertext={touched.role && errors.role}
// 								>
// 									<MenuItem value="user">User</MenuItem>
// 									<MenuItem value="admin">Admin</MenuItem>
// 									<MenuItem value="superadmin">Superadmin</MenuItem>
// 								</Select>{' '}
// 							</FormControl>

// 							<TextField
// 								fullWidth
// 								variant="filled"
// 								type="number"
// 								// label="birthdate"
// 								onBlur={handleBlur}
// 								onChange={handleChange}
// 								// onChange={(event) => setSsn(event.target.value)}
// 								value={values.ssn}
// 								name="ssn"
// 								label="ssn"
// 								error={!!touched.ssn && !!errors.ssn}
// 								helpertext={touched.ssn && errors.ssn}
// 								sx={{ gridColumn: 'span 4' }}
// 							/>
// 						</Box>
// 						<Box display="flex" justifyContent="end" mt="20px">
// 							<Button
// 								type="submit"
// 								color="secondary"
// 								variant="contained"
// 								onClick={handleFormSubmit}
// 							>
// 								Create New User
// 							</Button>
// 						</Box>
// 					</form>
// 				)}
// 			</Formik>
// 			<ToastContainer />
// 		</Box>
// 	);
// };

// const phoneRegExp =
// 	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
// 	firstName: yup.string().required('required'),
// 	lastName: yup.string().required('required'),
// 	email: yup.string().email('invalid email').required('required'),
// 	contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
// 	Password: yup.string().required('required'),
// 	gender: yup.string().required('required'),
// 	birthdate: yup.string().required('required'),
// 	age: yup.string().required('required'),
// 	ssn: yup.string().required('required'),
// 	type: yup.string().required('required'),
// 	role: yup.string().required('required'),
// });
// const initialValues = {
// 	firstName: '',
// 	lastName: '',
// 	email: '',
// 	contact: '',
// 	Password: '',
// 	birthdate: '',
// 	gender: '',
// 	age: '',
// 	ssn: '',
// 	type: '',
// 	role: '',
// };

// export default Form;

import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';

const Form = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [birthdate, setBirthdate] = useState('');
	const [gender, setGender] = useState('');
	const [phone, setPhone] = useState('');
	const [ssn, setSsn] = useState('');
	const [usertype, setUsertype] = useState('');
	const [userrole, setUserrole] = useState('');

	const isNonMobile = useMediaQuery('(min-width:600px)');

	const handleFormSubmit = (values) => {
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
		console.log('valuesss', username);
		fetch('http://localhost:3000/api/v1/superadmin/registeradmin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				token: `session_token=${localStorage.getItem('session_token')}`,
			},
			body: JSON.stringify({
				username,
				email,
				password,
				birthdate,
				phone,
				gender: values.gender,
				ssn,
				usertype: values.type,
				userrole: values.role,
			}),
		})
			.then((data) => {
				console.log('HEREE');

				if (data[0] === 200) {
					alert('Successfully created new user!');
				} else if (data[0] === 401) {
					alert('A user with that email already exists!');
				} else if (data[0] === 400) {
					alert('Unable to create user!');
				}
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<Box m="20px">
			<Header title="CREATE USER" subtitle="Create a New User Profile" />

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
								type="text"
								label="First Name"
								onChange={(e) => setUsername(e.target.value)}
								// value={values.firstName}
								// value={(e) => setUsername(e.target.value)}
								error={!!touched.firstName && !!errors.firstName}
								helpertext={touched.firstName && errors.firstName}
								sx={{ gridColumn: 'span 2' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Last Name"
								onBlur={handleBlur}
								// value={values.lastName}
								name="lastName"
								error={!!touched.lastName && !!errors.lastName}
								helpertext={touched.lastName && errors.lastName}
								sx={{ gridColumn: 'span 2' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Email"
								onBlur={handleBlur}
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								error={!!touched.email && !!errors.email}
								helpertext={touched.email && errors.email}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Contact Number"
								onBlur={handleBlur}
								onChange={(e) => setPhone(e.target.value)}
								name="contact"
								error={!!touched.contact && !!errors.contact}
								helpertext={touched.contact && errors.contact}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="password"
								label="Password"
								onBlur={handleBlur}
								onChange={(e) => setPassword(e.target.value)}
								name="Password"
								error={!!touched.Password && !!errors.Password}
								helpertext={touched.Password && errors.Password}
								sx={{ gridColumn: 'span 4' }}
							/>

							<TextField
								fullWidth
								variant="filled"
								type="date"
								// label="birthdate"
								onBlur={handleBlur}
								onChange={(e) => setBirthdate(e.target.value)}
								name="birthdate"
								error={!!touched.birthdate && !!errors.birthdate}
								helpertext={touched.birthdate && errors.birthdate}
								sx={{ gridColumn: 'span 5' }}
							/>
							<FormControl fullWidth variant="filled">
								<InputLabel id="gender-label">Gender</InputLabel>
								<Select
									labelId="gender-label"
									id="gender-select"
									name="gender"
									onBlur={handleBlur}
									onChange={handleChange}
									error={!!touched.gender && !!errors.gender}
									helpertext={touched.gender && errors.gender}
								>
									<MenuItem value="M">Male</MenuItem>
									<MenuItem value="F">Female</MenuItem>
								</Select>{' '}
							</FormControl>

							<FormControl fullWidth variant="filled">
								<InputLabel id="type-label">Type</InputLabel>
								<Select
									labelId="type-label"
									id="type-select"
									value={values.type}
									name="type"
									onBlur={handleBlur}
									onChange={handleChange}
									error={!!touched.type && !!errors.type}
									helperText={touched.type && errors.type}
								>
									<MenuItem value="normal">Normal</MenuItem>
									<MenuItem value="senior">Senior</MenuItem>
								</Select>{' '}
							</FormControl>

							<FormControl fullWidth variant="filled">
								<InputLabel id="role-label">Role</InputLabel>
								<Select
									labelId="role-label"
									id="role-select"
									name="role"
									onBlur={handleBlur}
									onChange={handleChange}
									error={!!touched.role && !!errors.role}
									helpertext={touched.role && errors.role}
								>
									<MenuItem value="user">User</MenuItem>
									<MenuItem value="admin">Admin</MenuItem>
									<MenuItem value="superadmin">Superadmin</MenuItem>
								</Select>{' '}
							</FormControl>

							<TextField
								fullWidth
								variant="filled"
								type="number"
								// label="birthdate"
								onBlur={handleBlur}
								onChange={(e) => setSsn(e.target.value)}
								name="ssn"
								label="ssn"
								error={!!touched.ssn && !!errors.ssn}
								helpertext={touched.ssn && errors.ssn}
								sx={{ gridColumn: 'span 4' }}
							/>
						</Box>
						<Box display="flex" justifyContent="end" mt="20px">
							<Button
								type="submit"
								color="secondary"
								variant="contained"
								onClick={() => handleFormSubmit(values)}
							>
								Create New User
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
	firstName: yup.string().required('required'),
	lastName: yup.string().required('required'),
	email: yup.string().email('invalid email').required('required'),
	contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
	Password: yup.string().required('required'),
	gender: yup.string().required('required'),
	birthdate: yup.string().required('required'),
	age: yup.string().required('required'),
	ssn: yup.string().required('required'),
	type: yup.string().required('required'),
	role: yup.string().required('required'),
});
const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	contact: '',
	Password: '',
	birthdate: '',
	gender: '',
	age: '',
	ssn: '',
	type: '',
	role: '',
};

export default Form;
