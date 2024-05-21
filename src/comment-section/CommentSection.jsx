import { useCommentsService } from './CommentSection.service.js';

import Title from '../components/Title.jsx';
import Divider from '../components/Divider.jsx';
import InputContainer from '../user-input/InputContainer.jsx';
import Thread from '../threads/Thread.jsx';

const commentSectionStyles = {
	width: '1000px',
	padding: '20px',
};

export default function CommentSection() {
	const { comments } = useCommentsService();

	return (
		<div style={commentSectionStyles}>
			<Title>💬 Leave a Comment</Title>
			<Divider />
			<InputContainer />
			{comments.map((comment) => (
				<Thread key={comment.id} comment={comment} />
			))}
		</div>
	);
}
