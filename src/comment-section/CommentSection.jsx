import { createContext, useEffect, useState } from 'react';

import { initialComments } from './CommentSection.service.js';

import Title from '../components/Title.jsx';
import Divider from '../components/Divider.jsx';
import InputContainer from '../user-input/InputContainer.jsx';
import Thread from '../threads/Thread.jsx';

export const commentsContext = createContext();

const commentSectionStyles = {
	width: '1000px',
	padding: '20px',
};

export default function CommentSection() {
	const [comments, setComments] = useState(initialComments);

	useEffect(() => {
		if (!localStorage) return;

		let localComments = localStorage.getItem('comments');
		if (!localComments) return;

		localComments = JSON.parse(localComments);
		console.log('Loading: ', localComments);
		setComments(localComments);
	}, []);

	useEffect(() => {
		if (comments === initialComments) return;

		localStorage.setItem('comments', JSON.stringify(comments));
		console.log('Saving: ', JSON.parse(localStorage.getItem('comments')));
	}, [comments]);

	return (
		<commentsContext.Provider value={{ comments, setComments }}>
			<div style={commentSectionStyles}>
				<Title>💬 Leave a Comment</Title>
				<Divider />
				<InputContainer submitText={'Comment'} />
				{comments.map((comment) => (
					<Thread key={comment.id} comment={comment} />
				))}
			</div>
		</commentsContext.Provider>
	);
}
