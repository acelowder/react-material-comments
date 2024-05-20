import { IconButton, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export default function Toolbar({
	onLike,
	isLiked,
	numLikes,
	onDislike,
	isDisliked,
}) {
	return (
		<div>
			<IconButton aria-label="like" onClick={onLike}>
				{isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
			</IconButton>
			<Typography
				variant="body2"
				sx={{
					color: 'text.secondary',
					fontSize: 12,
				}}
				display="inline"
			>
				{numLikes}
			</Typography>
			<IconButton
				aria-label="dislike"
				sx={{ ml: 0.5 }}
				onClick={onDislike}
			>
				{isDisliked ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
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
