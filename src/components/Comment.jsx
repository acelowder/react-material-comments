import { Typography } from '@mui/material';
import moment from 'moment';
import './Comment.css';

export default function Comment({ comment }) {
	return (
		<div className="comment">
			<img className="avatar" src={comment.avatar} />
			<div>
				<div className="comment-head">
					<Typography variant="body2" className="username">
						@<span>{comment.author}</span>
					</Typography>
					<Typography
						variant="body2"
						sx={{
							color: 'text.secondary',
							fontSize: 12,
							pb: 0.1,
						}}
					>
						{moment(comment.created).fromNow()}
					</Typography>
				</div>
				<Typography variant="body1">{comment.text}</Typography>
			</div>
		</div>
	);
}
