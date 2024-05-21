import { Typography } from '@mui/material';

const boldStyles = {
	fontWeight: '500',
};

export default function Username(props) {
	return (
		<Typography variant="body2">
			@<span style={boldStyles}>props.children</span>
		</Typography>
	);
}
