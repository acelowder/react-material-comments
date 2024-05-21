import { useContext } from 'react';

import { commentsContext } from '../comment-section/CommentSection';
import { useCommentsService } from '../comment-section/CommentSection.service';

import { Input } from '@mui/material';

import { draftContext } from './InputContainer';

const commentFieldStyles = {
	width: '100%',
};

export default function CommentField({ onClick }) {
	const { comments, setComments } = useContext(commentsContext);
	const { addComment } = useCommentsService(comments, setComments);

	const { commentText, setCommentText, setDrafting } =
		useContext(draftContext);

	const handleEnter = (e) => {
		e.preventDefault();
		addComment(commentText);
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
