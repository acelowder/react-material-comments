import { Typography } from '@mui/material';

const dateStyles = {
	color: 'text.secondary',
	fontSize: 12,
	pb: 0.1,
};

export default function DateCreated(props) {
	return (
		<Typography variant="body2" sx={dateStyles}>
			{props.children}
		</Typography>
	);
}
