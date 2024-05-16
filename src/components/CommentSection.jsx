import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Comment from './Comment';
import './CommentSection.css';

const initialComments = [
	{
		id: uuidv4(),
		author: 'Jane',
		text: 'This is a comment.',
		created: new Date('May 16, 2024 04:24:12'),
		likes: 3,
		dislikes: 0,
		replies: [
			{
				id: uuidv4(),
				author: 'John',
				text: 'This is a reply.',
				created: new Date('May 16, 2024 04:24:57'),
				likes: 1,
				dislikes: 0,
			},
		],
	},
	{
		id: uuidv4(),
		author: 'John',
		text: 'This is another comment.',
		created: new Date('May 16, 2024 04:24:38'),
		likes: 1,
		dislikes: 1,
		replies: [],
	},
];

export default function CommentSection() {
	const [comments, setComments] = useState(initialComments);

	return (
		<div className="comment-section">
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	);
}
