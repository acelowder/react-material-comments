import { Button } from '@mui/material';

const disabledStyles = {
	borderRadius: 8,
	px: 2,
	fontSize: 13,
	textTransform: 'none',
	color: 'text.disabled',
	bgcolor: 'action.hover',
	':hover': {
		bgcolor: 'action.hover',
	},
};

const enabledStyles = {
	borderRadius: 8,
	px: 2,
	fontSize: 13,
	textTransform: 'none',
	color: 'black',
	bgcolor: 'primary.main',
	':hover': {
		bgcolor: 'primary.dark',
	},
};

export default function PrimaryButton({ children, onClick, disabled }) {
	return (
		<Button
			size="large"
			onClick={onClick}
			sx={disabled ? disabledStyles : enabledStyles}
		>
			{children}
		</Button>
	);
}
