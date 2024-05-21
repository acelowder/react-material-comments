import { useCommentsService } from './CommentSection.service.js';
import CommentTitle from './CommentTitle';
import CommentInput from './CommentInput';
import Thread from './Thread';

export default function CommentSection() {
	const { comments, profile } = useCommentsService();

	return (
		<div style={{ width: '700px', padding: '20px' }}>
			<CommentTitle />
			<hr style={{ border: 'none', borderTop: '1px solid #888' }} />
			<CommentInput />
			{comments.map((comment) => (
				<Thread key={comment.id} comment={comment} />
			))}
		</div>
	);
}
