import { useContext } from 'react';

import { commentsContext } from '../comment-section/CommentSection';
import { useCommentsService } from '../comment-section/CommentSection.service';

import SmallTextButton from '../components/SmallTextButton';
import ToggleIcon from '../components/ToggleIcon';
import LikesCounter from '../components/LikesCounter';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export default function Toolbar({ comment, threadId }) {
	const { comments, setComments } = useContext(commentsContext);

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
	} = useCommentsService(comments, setComments);

	let onLike, onDislike, numLikes, isLiked, isDisliked;

	if (threadId) {
		onLike = () => likeReply(comment.id, threadId);
		onDislike = () => dislikeReply(comment.id, threadId);
		isLiked = isReplyLiked(comment.id, threadId);
		isDisliked = isReplyDisliked(comment.id, threadId);
		numLikes = getReplyNumLikes(comment.id, threadId);
	} else {
		onLike = () => likeComment(comment.id);
		onDislike = () => dislikeComment(comment.id);
		isLiked = isCommentLiked(comment.id);
		isDisliked = isCommentDisliked(comment.id);
		numLikes = getCommentNumLikes(comment.id);
	}

	return (
		<div>
			<ToggleIcon
				toggle={isLiked}
				enabled={<ThumbUpAltIcon />}
				disabled={<ThumbUpOffAltIcon />}
				onClick={onLike}
				aria="like"
			/>
			<LikesCounter numLikes={numLikes} />
			<ToggleIcon
				toggle={isDisliked}
				enabled={<ThumbDownAltIcon />}
				disabled={<ThumbDownOffAltIcon />}
				onClick={onDislike}
				aria="dislike"
			/>
			<SmallTextButton>Reply</SmallTextButton>
		</div>
	);
}
