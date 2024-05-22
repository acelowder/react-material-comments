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
	marginTop: '-12px',
	marginBottom: '-16px',
};

export default function InputToolbar() {
	const { comments, setComments, userId } = useContext(commentsContext);
	const { addComment } = useCommentsService(comments, setComments, userId);

	const {
		commentText,
		setCommentText,
		setDrafting,
		submitText,
		threadId,
		onCancel,
	} = useContext(draftContext);

	const handleCancel = () => {
		setDrafting(false);
	};

	const handleComment = () => {
		threadId ? addReply(commentText, threadId) : addComment(commentText);
		setCommentText('');
		setDrafting(false);
	};

	return (
		<div style={toolbarStyles}>
			<LargeTextButton onClick={onCancel || handleCancel}>
				Cancel
			</LargeTextButton>
			<PrimaryButton onClick={handleComment} disabled={!commentText}>
				{submitText}
			</PrimaryButton>
		</div>
	);
}
