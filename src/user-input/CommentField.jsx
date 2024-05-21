import { useContext } from 'react';

import { Input } from '@mui/material';

import { draftContext } from './InputContainer';

const commentFieldStyles = {
	width: '100%',
};

export default function CommentField({ onClick }) {
	const { commentText, setCommentText } = useContext(draftContext);

	return (
		<Input
			type="text"
			size="small"
			placeholder="Add a comment..."
			sx={commentFieldStyles}
			value={commentText}
			onChange={(e) => setCommentText(e.target.value)}
			onClick={onClick}
		/>
	);
}
