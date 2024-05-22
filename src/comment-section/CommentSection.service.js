import { v4 as uuidv4 } from 'uuid';

export const userAvatar =
	'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png';

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

export const useCommentsService = (comments, setComments, userId) => {
	const userName = 'github-user-' + userId.split('-').pop();

	const likeComment = (id) => {
		const updatedComments = comments.map((mapComment) => {
			if (mapComment.id === id) {
				return {
					...mapComment,
					likes: mapComment.likes.includes(userId)
						? mapComment.likes.filter(
								(filterId) => filterId !== userId
						  )
						: [...mapComment.likes, userId],
					dislikes: mapComment.dislikes.includes(userId)
						? mapComment.dislikes.filter(
								(filterId) => filterId !== userId
						  )
						: mapComment.dislikes,
				};
			}
			return mapComment;
		});
		setComments(updatedComments);
	};

	const dislikeComment = (id) => {
		const updatedComments = comments.map((mapComment) => {
			if (mapComment.id === id) {
				return {
					...mapComment,
					dislikes: mapComment.dislikes.includes(userId)
						? mapComment.dislikes.filter(
								(filterId) => filterId !== userId
						  )
						: [...mapComment.dislikes, userId],
					likes: mapComment.likes.includes(userId)
						? mapComment.likes.filter(
								(filterId) => filterId !== userId
						  )
						: mapComment.likes,
				};
			}
			return mapComment;
		});
		setComments(updatedComments);
	};

	const getCommentNumLikes = (id) => {
		return comments.find((mapComment) => mapComment.id === id).likes.length;
	};

	const isCommentLiked = (id) => {
		return comments
			.find((mapComment) => mapComment.id === id)
			.likes.includes(userId);
	};

	const isCommentDisliked = (id) => {
		return comments
			.find((mapComment) => mapComment.id === id)
			.dislikes.includes(userId);
	};

	const likeReply = (id, threadId) => {
		const updatedComments = comments.map((mapComment) => {
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
								dislikes: mapReply.dislikes.includes(userId)
									? mapReply.dislikes.filter(
											(filterId) => filterId !== userId
									  )
									: mapReply.dislikes,
							};
						}
						return mapReply;
					}),
				};
			}
			return mapComment;
		});
		setComments(updatedComments);
	};

	const dislikeReply = (id, threadId) => {
		const updatedComments = comments.map((mapComment) => {
			if (mapComment.id === threadId) {
				return {
					...mapComment,
					replies: mapComment.replies.map((mapReply) => {
						if (mapReply.id === id) {
							return {
								...mapReply,
								dislikes: mapReply.dislikes.includes(userId)
									? mapReply.dislikes.filter(
											(filterId) => filterId !== userId
									  )
									: [...mapReply.dislikes, userId],
								likes: mapReply.likes.includes(userId)
									? mapReply.likes.filter(
											(filterId) => filterId !== userId
									  )
									: mapReply.likes,
							};
						}
						return mapReply;
					}),
				};
			}
			return mapComment;
		});
		setComments(updatedComments);
	};

	const getReplyNumLikes = (id, threadId) => {
		return comments
			.find((mapComment) => mapComment.id === threadId)
			.replies.find((mapReply) => mapReply.id === id).likes.length;
	};

	const isReplyLiked = (id, threadId) => {
		return comments
			.find((mapComment) => mapComment.id === threadId)
			.replies.find((mapReply) => mapReply.id === id)
			.likes.includes(userId);
	};

	const isReplyDisliked = (id, threadId) => {
		return comments
			.find((mapComment) => mapComment.id === threadId)
			.replies.find((mapReply) => mapReply.id === id)
			.dislikes.includes(userId);
	};

	const addComment = (text) => {
		const comment = {
			id: uuidv4(),
			author: userName,
			authorId: userId,
			avatar: userAvatar,
			text,
			created: Date.now(),
			likes: [userId],
			dislikes: [],
			replies: [],
		};
		setComments([comment, ...comments]);
	};

	const addReply = (text, threadId) => {
		const reply = {
			id: uuidv4(),
			author: userName,
			authorId: userId,
			avatar: userAvatar,
			text,
			created: Date.now(),
			likes: [userId],
			dislikes: [],
		};
		const updatedComments = comments.map((mapComment) => {
			if (mapComment.id === threadId) {
				return {
					...mapComment,
					replies: [...mapComment.replies, reply],
				};
			}
			return mapComment;
		});
		setComments(updatedComments);
	};

	const deleteComment = (id) => {
		const updatedComments = comments.filter(
			(mapComment) => mapComment.id !== id
		);
		setComments(updatedComments);
	};

	const deleteReply = (id, threadId) => {
		const updatedComments = comments.map((mapComment) => {
			if (mapComment.id === threadId) {
				return {
					...mapComment,
					replies: mapComment.replies.filter(
						(mapReply) => mapReply.id !== id
					),
				};
			}
			return mapComment;
		});
		setComments(updatedComments);
	};

	return {
		comments,
		likeComment,
		likeReply,
		dislikeComment,
		dislikeReply,
		getCommentNumLikes,
		getReplyNumLikes,
		isCommentLiked,
		isReplyLiked,
		isCommentDisliked,
		isReplyDisliked,
		addComment,
		addReply,
		deleteComment,
		deleteReply,
		userName,
	};
};
