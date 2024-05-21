import { useEffect, useState, useMemo, createContext } from 'react';

import InputForm from './InputForm';
import LargeTextButton from '../components/LargeTextButton';

const inputContainerStyles = {
	marginTop: '16px',
	marginBottom: '32px',
};

export const draftContext = createContext();

export default function InputContainer() {
	const [drafting, setDrafting] = useState(false);
	const [commentText, setCommentText] = useState('');
	const contextValues = useMemo(
		() => ({
			drafting,
			setDrafting,
			commentText,
			setCommentText,
		}),
		[drafting, commentText]
	);

	useEffect(() => {
		drafting && setCommentText('');
	}, [drafting]);

	return (
		<draftContext.Provider value={contextValues}>
			<div style={inputContainerStyles}>
				<InputForm />
				{drafting && (
					<LargeTextButton onClick={() => setDrafting(false)}>
						Cancel
					</LargeTextButton>
				)}
			</div>
		</draftContext.Provider>
	);
}
