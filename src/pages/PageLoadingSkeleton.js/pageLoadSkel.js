import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '80vh',
				padding: '0 20px',
			}}
		>
			<Box sx={{ width: '80%', maxWidth: 1000 }}>
				<Skeleton sx={{ width: '100%', height: '70px' }} />
				<Skeleton animation="wave" sx={{ width: '100%', height: '70px' }} />
				<Skeleton animation={false} sx={{ width: '100%', height: '70px' }} />
				<Skeleton animation="wave" sx={{ width: '100%', height: '70px' }} />
				<Skeleton animation="wave" sx={{ width: '100%', height: '70px' }} />
			</Box>
		</Box>
	);
}
