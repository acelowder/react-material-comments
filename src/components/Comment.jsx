import { useCommentsService } from './CommentSection.service';
import { Typography } from '@mui/material';
import moment from 'moment';
import Toolbar from './Toolbar';
import './Comment.css';

export default function Comment({ comment, threadId = null }) {
	const {
		likeComment,
		dislikeComment,
		getCommentNumLikes,
		isCommentLiked,
		isCommentDisliked,
		likeReply,
		dislikeReply,
		getReplyNumLikes,
		isReplyLiked,
		isReplyDisliked,
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
							? () => likeReply(comment.id, threadId)
							: () => likeComment(comment.id)
					}
					isLiked={
						threadId
							? isReplyLiked(comment.id, threadId)
							: isCommentLiked(comment.id)
					}
					numLikes={
						threadId
							? getReplyNumLikes(comment.id, threadId)
							: getCommentNumLikes(comment.id)
					}
					onDislike={
						threadId
							? () => dislikeReply(comment.id, threadId)
							: () => dislikeComment(comment.id)
					}
					isDisliked={
						threadId
							? isReplyDisliked(comment.id, threadId)
							: isCommentDisliked(comment.id)
					}
				/>
			</div>
		</div>
	);
}
