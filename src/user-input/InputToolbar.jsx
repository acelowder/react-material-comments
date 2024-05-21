import { useContext } from 'react';

import { commentsContext } from '../comment-section/CommentSection';
import { useCommentsService } from '../comment-section/CommentSection.service';
import { draftContext } from './InputContainer';

import LargeTextButton from '../components/LargeTextButton';
import PrimaryButton from '../components/PrimaryButton';

const toolbarStyles = {
	display: 'flex',
	gap: '8px',
	justifyContent: 'flex-end',
	marginTop: '8px',
	marginBottom: '-32px',
};

export default function InputToolbar() {
	const { comments, setComments } = useContext(commentsContext);
	const { addComment } = useCommentsService(comments, setComments);

	const { commentText, setCommentText, setDrafting } =
		useContext(draftContext);

	const handleCancel = () => {
		setDrafting(false);
	};

	const handleComment = () => {
		addComment(commentText);
		setCommentText('');
		setDrafting(false);
	};

	return (
		<div style={toolbarStyles}>
			<LargeTextButton onClick={handleCancel}>Cancel</LargeTextButton>
			<PrimaryButton onClick={handleComment} disabled={!commentText}>
				Comment
			</PrimaryButton>
		</div>
	);
}
