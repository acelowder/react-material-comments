import { IconButton, Button, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export default function Toolbar() {
	return (
		<div>
			<IconButton aria-label="like">
				<ThumbUpOffAltIcon />
			</IconButton>
			<Typography
				variant="body2"
				sx={{
					color: 'text.secondary',
					fontSize: 12,
				}}
				display="inline"
			>
				2
			</Typography>
			<IconButton aria-label="dislike" sx={{ ml: 0.5 }}>
				<ThumbDownOffAltIcon />
			</IconButton>
			<Button
				variant="text"
				sx={{
					borderRadius: 8,
					color: 'white',
					ml: 0.5,
					':hover': {
						bgcolor: 'action.hover',
					},
				}}
			>
				Reply
			</Button>
		</div>
	);
}
