import { Button } from '@mui/material';

const roundTextButtonStyles = {
	borderRadius: 8,
	color: 'white',
	textTransform: 'none',
	float: 'right',
	':hover': {
		bgcolor: 'action.hover',
	},
};

export default function LargeTextButton({ onClick, ...props }) {
	return (
		<Button
			variant="text"
			size="large"
			sx={roundTextButtonStyles}
			onClick={onClick}
		>
			{props.children}
		</Button>
	);
}
