import { IconButton } from '@mui/material';

export default function ToggleIcon({
	toggle,
	enabled,
	disabled,
	onClick,
	aria,
}) {
	return (
		<IconButton aria-label={aria} onClick={onClick}>
			{toggle ? enabled : disabled}
		</IconButton>
	);
}
