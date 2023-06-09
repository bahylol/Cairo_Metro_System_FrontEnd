import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<Stack sx={{ width: '100%', padding: '10px' }} spacing={2}>
			<Alert severity="warning">
				<AlertTitle>Page Not Found {':('}</AlertTitle>
				It seems like you entered an invalid page url!
				<strong>
					{' '}
					<Link to="/">Go Back To Home?</Link>
				</strong>
			</Alert>
		</Stack>
	);
};

export default NotFound;
