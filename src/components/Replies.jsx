import Comment from './Comment';
import './Replies.css';

export default function Replies({ replies }) {
	return (
		<div className="replies">
			{replies.map((reply) => (
				<Comment key={reply.id} comment={reply} />
			))}
		</div>
	);
}
