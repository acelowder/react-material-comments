import { useContext } from 'react';

import { draftContext } from './InputContainer';

const commentFieldStyles = {
	width: '100%',
};

export default function CommentField({ onClick }) {
	const { commentText, setCommentText } = useContext(draftContext);

	return (
		<input
			type="text"
			placeholder="Add a comment"
			style={commentFieldStyles}
			value={commentText}
			onChange={(e) => setCommentText(e.target.value)}
			onClick={onClick}
		/>
	);
}
