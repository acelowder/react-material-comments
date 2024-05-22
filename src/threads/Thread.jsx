import Comment from './Comment';
import Replies from './Replies';

const threadStyles = {
	marginTop: '32px',
};

export default function Thread({ comment }) {
	return (
		<div style={threadStyles}>
			<Comment key={comment.id} comment={comment} />
			{comment.replies && (
				<Replies replies={comment.replies} threadId={comment.id} />
			)}
		</div>
	);
}
