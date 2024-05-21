import { Typography } from '@mui/material';

const titleStyles = { mb: 1, fontWeight: 'bold' };

export default function Title(props) {
	return (
		<Typography variant="h4" component="h1" sx={titleStyles}>
			{props.children}
		</Typography>
	);
}
