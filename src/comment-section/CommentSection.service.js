import { v4 as uuidv4 } from 'uuid';

export const userAvatar =
	'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png';

const nick = {
	id: uuidv4(),
	avatar: 'https://mui.com/static/images/avatar/1.jpg',
	userName: 'NickInfinity_',
};

const arvin = {
	id: uuidv4(),
	avatar: 'https://mui.com/static/images/avatar/2.jpg',
	userName: 'arvinforever24',
};

const jane = {
	id: uuidv4(),
	avatar: 'https://mui.com/static/images/avatar/3.jpg',
	userName: 'SweetJaneDoe',
};

const bridgette = {
	id: uuidv4(),
	avatar: 'https://mui.com/static/images/avatar/4.jpg',
	userName: 'bridgetteVIBES',
};

const victor = {
	id: uuidv4(),
	avatar: 'https://mui.com/static/images/avatar/5.jpg',
	userName: 'TheVictor_xyz',
};

const gary = {
	id: uuidv4(),
	avatar: 'https://mui.com/static/images/avatar/6.jpg',
	userName: 'MrGaryTheGreat',
};

export const initialComments = [
	{
		id: uuidv4(),
		author: nick.userName,
		authorId: nick.id,
		avatar: nick.avatar,
		text: 'Simple and great! 👍',
		created: new Date('May 18, 2024 011:24:12'),
		likes: [nick.id, bridgette.id, victor.id, gary.id],
		dislikes: [],
		replies: [],
	},
	{
		id: uuidv4(),
		author: arvin.userName,
		authorId: arvin.id,
		avatar: arvin.avatar,
		text: 'I love these kinds of projects, small and useful',
		created: new Date('May 19, 2024 14:02:48'),
		likes: [arvin.id, bridgette.id],
		dislikes: [],
		replies: [
			{
				id: uuidv4(),
				author: bridgette.userName,
				authorId: bridgette.id,
				avatar: bridgette.avatar,
				text: 'AGREED',
				created: new Date('May 20, 2024 8:23:09'),
				likes: [bridgette.id],
				dislikes: [],
			},
			{
				id: uuidv4(),
				author: victor.userName,
				authorId: victor.id,
				avatar: victor.avatar,
				text: '@bridgetteVIBES hola',
				created: new Date('May 20, 2024 16:56:47'),
				likes: [victor.id],
				dislikes: [bridgette.id],
			},
			{
				id: uuidv4(),
				author: gary.userName,
				authorId: gary.id,
				avatar: gary.avatar,
				text: 'Nice',
				created: new Date('May 21, 2024 12:08:12'),
				likes: [gary.id],
				dislikes: [],
			},
		],
	},
	{
		id: uuidv4(),
		author: jane.userName,
		authorId: jane.id,
		avatar: jane.avatar,
		text: 'Testing out the app!',
		created: new Date('May 16, 2024 17:30:01'),
		likes: [jane.id, bridgette.id],
		dislikes: [],
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
