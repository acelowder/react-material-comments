import { Typography } from '@mui/material';
import './Comment.css';

export default function Comment({ comment }) {
	return (
		<div className="comment">
			<img className="avatar" src={comment.avatar} />
			<div>
				<Typography variant="body2">@{comment.author}</Typography>
				<Typography variant="body2" gutterBottom={true}>
					{comment.text}
				</Typography>
			</div>
		</div>
	);
}
