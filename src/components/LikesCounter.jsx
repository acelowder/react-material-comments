import { Typography } from '@mui/material';

const counterStyles = {
	color: 'text.secondary',
	fontSize: 12,
};

export default function LikesCounter({ numLikes }) {
	return (
		<Typography variant="body2" sx={counterStyles} display="inline">
			{numLikes}
		</Typography>
	);
}
