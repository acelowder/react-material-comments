import { useEffect, useState, useMemo, createContext } from 'react';

import InputForm from './InputForm';
import InputToolbar from './InputToolbar';

const inputContainerStyles = {
	marginTop: '16px',
};

export const draftContext = createContext();

export default function InputContainer({
	submitText,
	threadId,
	onCancel,
	initialText,
}) {
	const [drafting, setDrafting] = useState(onCancel ? true : false);
	const [commentText, setCommentText] = useState(initialText || '');
	const contextValues = useMemo(
		() => ({
			drafting,
			setDrafting,
			commentText,
			setCommentText,
			submitText,
			threadId,
			onCancel,
		}),
		[drafting, commentText]
	);

	useEffect(() => {
		!drafting && setCommentText('');
	}, [drafting]);

	return (
		<draftContext.Provider value={contextValues}>
			<div style={inputContainerStyles}>
				<InputForm />
				{drafting && <InputToolbar />}
			</div>
		</draftContext.Provider>
	);
}
