import Comment from './Comment';
import './Replies.css';

export default function Replies({ replies, threadId }) {
	return (
		<div className="replies">
			{replies.map((reply) => (
				<Comment key={reply.id} comment={reply} threadId={threadId} />
			))}
		</div>
	);
}
