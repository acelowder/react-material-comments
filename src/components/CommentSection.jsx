import { useCommentsService } from './CommentSection.service.js';
import Thread from './Thread';
import './CommentSection.css';

export default function CommentSection() {
	const { comments } = useCommentsService();

	return (
		<div className="comment-section">
			{comments.map((comment) => (
				<Thread key={comment.id} comment={comment} />
			))}
		</div>
	);
}
