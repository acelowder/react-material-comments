import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { initialComments } from './CommentSection.service.js';

import Title from '../components/Title.jsx';
import Divider from '../components/Divider.jsx';
import InputContainer from '../user-input/InputContainer.jsx';
import Thread from '../threads/Thread.jsx';

export const commentsContext = createContext();

const commentSectionStyles = {
	width: '1000px',
	padding: '20px',
	minWidth: '500px',
};

export default function CommentSection() {
	const [comments, setComments] = useState(initialComments);
	const [userId, setUserId] = useState(uuidv4());

	useEffect(() => {
		if (!localStorage) return;

		let localComments = localStorage.getItem('comments');
		if (!localComments) return;
		localComments = JSON.parse(localComments);
		setComments(localComments);

		let localUserId = localStorage.getItem('userId');
		if (!localUserId) return;
		setUserId(localUserId);
	}, []);

	useEffect(() => {
		if (comments === initialComments) return;

		localStorage.setItem('comments', JSON.stringify(comments));
		localStorage.setItem('userId', userId);
	}, [comments]);

	return (
		<commentsContext.Provider value={{ comments, setComments, userId }}>
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
