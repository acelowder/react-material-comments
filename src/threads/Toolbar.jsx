import { useContext, useState } from 'react';

import { commentsContext } from '../comment-section/CommentSection';
import { useCommentsService } from '../comment-section/CommentSection.service';

import SmallTextButton from '../components/SmallTextButton';
import ToggleIcon from '../components/ToggleIcon';
import LikesCounter from '../components/LikesCounter';
import InputContainer from '../user-input/InputContainer';
import { IconButton } from '@mui/material';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Toolbar({ comment, threadId }) {
	const [replying, setReplying] = useState(false);

	const { comments, setComments, userId } = useContext(commentsContext);

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
		deleteComment,
		deleteReply,
	} = useCommentsService(comments, setComments, userId);

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

	const handleDelete = () => {
		if (threadId) {
			deleteReply(comment.id, threadId);
		} else {
			deleteComment(comment.id);
		}
	};

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
			<SmallTextButton onClick={() => setReplying(!replying)}>
				Reply
			</SmallTextButton>
			{replying && (
				<InputContainer
					submitText={'Reply'}
					threadId={threadId || comment.id}
					onCancel={() => setReplying(false)}
					initialText={threadId ? '@' + comment.author + ' ' : null}
				/>
			)}
			{comment.authorId === userId && (
				<IconButton onClick={handleDelete}>
					<DeleteOutlineIcon />
				</IconButton>
			)}
		</div>
	);
}
