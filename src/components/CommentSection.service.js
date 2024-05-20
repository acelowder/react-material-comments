import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export const userId = uuidv4();

const JaneId = uuidv4();
const JohnId = uuidv4();
export const initialComments = [
	{
		id: uuidv4(),
		author: 'Jane',
		authorId: JaneId,
		avatar: 'https://mui.com/static/images/avatar/3.jpg',
		text: 'This is a comment.',
		created: new Date('May 16, 2024 04:24:12'),
		likes: [JaneId, JohnId],
		dislikes: [],
		replies: [
			{
				id: uuidv4(),
				author: 'John',
				authorId: JohnId,
				avatar: 'https://mui.com/static/images/avatar/1.jpg',
				text: 'This is a reply.',
				created: new Date('May 16, 2024 04:24:57'),
				likes: [JohnId],
				dislikes: [],
			},
		],
	},
	{
		id: uuidv4(),
		author: 'John',
		authorId: JohnId,
		avatar: 'https://mui.com/static/images/avatar/1.jpg',
		text: 'This is another comment.',
		created: new Date('May 16, 2024 04:24:38'),
		likes: [JohnId],
		dislikes: [JaneId],
		replies: [],
	},
];

// Comments Array
export const useCommentsService = () => {
	const [comments, setComments] = useState(initialComments);

	const likeComment = (id) => {
		const newComments = comments.map((mapComment) => {
			if (mapComment.id === id) {
				return {
					...mapComment,
					likes: mapComment.likes.includes(userId)
						? mapComment.likes.filter((filterId) => filterId !== userId)
						: [...mapComment.likes, userId],
				};
			}
			return mapComment;
		});
		setComments(newComments);
	};

	const likeReply = (threadId, id) => {
		const newComments = comments.map((mapComment) => {
			if (mapComment.id === threadId) {
				return {
					...mapComment,
					replies: mapComment.replies.map((mapReply) => {
						if (mapReply.id === id) {
							return {
								...mapReply,
								likes: mapReply.likes.includes(userId)
									? mapReply.likes.filter(
											(filterId) => filterId !== userId
									  )
									: [...mapReply.likes, userId],
							};
						}
						return mapReply;
					}),
				};
			}
			return mapComment;
		});
		setComments(newComments);
	};

	const getCommentNumLikes = (id) => {
		return comments.find((mapComment) => mapComment.id === id).likes.length;
	};

	const getReplyNumLikes = (threadId, id) => {
		return comments
			.find((mapComment) => mapComment.id === threadId)
			.replies.find((mapReply) => mapReply.id === id).likes.length;
	};

	const isCommentLiked = (id) => {
		return comments
			.find((mapComment) => mapComment.id === id)
			.likes.includes(userId);
	};

	const isReplyLiked = (threadId, id) => {
		return comments
			.find((mapComment) => mapComment.id === threadId)
			.replies.find((mapReply) => mapReply.id === id)
			.likes.includes(userId);
	};

	useEffect(() => {
		setComments(initialComments);
	}, []);
	return {
		comments,
		likeComment,
		likeReply,
		getCommentNumLikes,
		getReplyNumLikes,
		isCommentLiked,
		isReplyLiked,
	};
};
