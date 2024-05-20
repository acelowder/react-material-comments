import { useCommentsService } from './CommentSection.service';
import { Typography } from '@mui/material';
import moment from 'moment';
import Toolbar from './Toolbar';
import './Comment.css';

export default function Comment({ comment, threadId = null }) {
	const {
		likeReply,
		getReplyNumLikes,
		isReplyLiked,
		likeComment,
		getCommentNumLikes,
		isCommentLiked,
	} = useCommentsService();

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
				<Toolbar
					onLike={
						threadId
							? () => likeReply(threadId, comment.id)
							: () => likeComment(comment.id)
					}
					isLiked={
						threadId
							? isReplyLiked(threadId, comment.id)
							: isCommentLiked(comment.id)
					}
					numLikes={
						threadId
							? getReplyNumLikes(threadId, comment.id)
							: getCommentNumLikes(comment.id)
					}
				/>
			</div>
		</div>
	);
}
