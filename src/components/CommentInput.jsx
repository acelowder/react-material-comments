import { userAvatar, userName } from './CommentSection.service';

export default function CommentInput() {
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				gap: '16px',
				marginTop: '16px',
				marginBottom: '32px',
				alignItems: 'center',
			}}
		>
			<img
				style={{
					width: '40px',
					height: '40px',
					borderRadius: '50%',
				}}
				src={userAvatar}
			/>
			<input
				type="text"
				placeholder="Add a comment"
				style={{
					width: '100%',
				}}
			/>
		</div>
	);
}
