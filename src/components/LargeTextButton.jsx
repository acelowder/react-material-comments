import { Button } from '@mui/material';

const roundTextButtonStyles = {
	borderRadius: 8,
	px: 2,
	fontSize: 13,
	textTransform: 'none',
	color: 'white',
	':hover': {
		bgcolor: 'action.disabled',
	},
};

export default function LargeTextButton({ onClick, children }) {
	return (
		<Button
			variant="text"
			size="large"
			sx={roundTextButtonStyles}
			onClick={onClick}
		>
			{children}
		</Button>
	);
}
