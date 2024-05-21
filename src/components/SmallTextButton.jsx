import { Button } from '@mui/material';

const roundTextButtonStyles = {
	borderRadius: 8,
	color: 'white',
	ml: 0.5,
	':hover': {
		bgcolor: 'action.hover',
	},
};

export default function SmallTextButton({ onClick, ...props }) {
	return (
		<Button variant="text" sx={roundTextButtonStyles} onClick={onClick}>
			{props.children}
		</Button>
	);
}
