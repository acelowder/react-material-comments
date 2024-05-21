import Comment from './Comment';
import Replies from './Replies';

export default function Thread({ comment }) {
	return (
		<div>
			<Comment key={comment.id} comment={comment} />
			{comment.replies && (
				<Replies replies={comment.replies} threadId={comment.id} />
			)}
		</div>
	);
}
