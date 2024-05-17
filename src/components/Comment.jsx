import { Typography } from '@mui/material';
import './Comment.css';

export default function Comment({ comment }) {
	return (
		<div className="comment">
			<img className="avatar" src={comment.avatar} />
			<div>
				<Typography variant="body2" className="username">
					@<span>{comment.author}</span>
				</Typography>
				<Typography variant="body1">{comment.text}</Typography>
			</div>
		</div>
	);
}
