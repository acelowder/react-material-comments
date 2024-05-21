import Comment from './Comment';

const replyContainerStyles = {
	marginLeft: '40px',
};

export default function Replies({ replies, threadId }) {
	return (
		<div style={replyContainerStyles}>
			{replies.map((reply) => (
				<Comment key={reply.id} comment={reply} threadId={threadId} />
			))}
		</div>
	);
}
