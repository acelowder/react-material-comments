import { Typography } from '@mui/material';
import './Comment.css';

export default function Comment({ comment }) {
	return (
		<>
			<div className="comment">
				<Typography variant="body2">{comment.author}</Typography>
				<Typography variant="body2" gutterBottom={true}>
					{comment.text}
				</Typography>
			</div>
			{comment.replies &&
				comment.replies.map((reply) => (
					<div className="reply">
						<Comment key={reply.id} comment={reply} />
					</div>
				))}
		</>
	);
}
