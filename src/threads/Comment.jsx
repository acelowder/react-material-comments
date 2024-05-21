import { Typography } from '@mui/material';
import Header from './Header';
import Toolbar from './Toolbar';
import Avatar from '../components/Avatar';

const commentContainerStyles = {
	display: 'flex',
	gap: '16px',
	marginBottom: '16px',
};

export default function Comment({ comment, threadId = null }) {
	return (
		<div style={commentContainerStyles}>
			<Avatar src={comment.avatar} />
			<div>
				<Header comment={comment} />
				<Typography variant="body1">{comment.text}</Typography>
				<Toolbar comment={comment} threadId={threadId} />
			</div>
		</div>
	);
}
