import { useContext } from 'react';

import { commentsContext } from '../comment-section/CommentSection';
import { useCommentsService } from '../comment-section/CommentSection.service';

import { Input } from '@mui/material';

import { draftContext } from './InputContainer';

const commentFieldStyles = {
	width: '100%',
};

export default function CommentField({ onClick }) {
	const { comments, setComments, userId } = useContext(commentsContext);
	const { addComment, addReply } = useCommentsService(
		comments,
		setComments,
		userId
	);

	const { commentText, setCommentText, threadId } = useContext(draftContext);

	const handleEnter = (e) => {
		e.preventDefault();
		threadId ? addReply(commentText, threadId) : addComment(commentText);
		setCommentText('');
	};

	return (
		<form style={commentFieldStyles} onSubmit={(e) => handleEnter(e)}>
			<Input
				type="text"
				size="small"
				placeholder="Add a comment..."
				sx={commentFieldStyles}
				value={commentText}
				onChange={(e) => setCommentText(e.target.value)}
				onClick={onClick}
			/>
		</form>
	);
}
