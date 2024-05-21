import { Typography } from '@mui/material';

const boldStyles = {
	fontWeight: '500',
};

export default function Username({ children }) {
	return (
		<Typography variant="body2">
			@<span style={boldStyles}>{children}</span>
		</Typography>
	);
}
