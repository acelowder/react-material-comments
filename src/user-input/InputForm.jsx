import { useContext } from 'react';

import { userAvatar } from '../comment-section/CommentSection.service';

import { draftContext } from './InputContainer';

import Avatar from '../components/Avatar';
import CommentField from './CommentField';

const formStyles = {
	display: 'flex',
	width: '100%',
	gap: '16px',
	marginBottom: '8px',
};

export default function InputForm() {
	const { setDrafting, threadId } = useContext(draftContext);

	return (
		<div style={formStyles}>
			<Avatar src={userAvatar} small={threadId ? true : false} />
			<CommentField onClick={() => setDrafting(true)} />
		</div>
	);
}
