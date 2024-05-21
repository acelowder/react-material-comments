const avatarStyles = {
	width: '40px',
	height: '40px',
	borderRadius: '50%',
};

export default function Avatar({ src }) {
	return <img style={avatarStyles} src={src} />;
}
