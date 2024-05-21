import { useContext } from 'react';

import { draftContext } from './InputContainer';

import LargeTextButton from '../components/LargeTextButton';
import PrimaryButton from '../components/PrimaryButton';

const toolbarStyles = {
	display: 'flex',
	gap: '8px',
	justifyContent: 'flex-end',
	marginTop: '8px',
	marginBottom: '-32px',
};

export default function InputToolbar() {
	const { commentText, setDrafting } = useContext(draftContext);

	const handleCancel = () => {
		setDrafting(false);
	};

	const handleComment = () => {
		setDrafting(false);
	};

	return (
		<div style={toolbarStyles}>
			<LargeTextButton onClick={handleCancel}>Cancel</LargeTextButton>
			<PrimaryButton onClick={handleComment} disabled={!commentText}>
				Comment
			</PrimaryButton>
		</div>
	);
}
