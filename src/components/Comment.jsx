import { Typography } from '@mui/material';

export default function Comment({ comment }) {
	console.log(comment.created);

	return (
		<>
			<Typography variant="body2">{comment.author}</Typography>
			<Typography variant="body2" gutterBottom={true}>
				{comment.text}
			</Typography>
		</>
	);
}
