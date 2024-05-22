const avatarStyles = {
	width: '40px',
	height: '40px',
	borderRadius: '50%',
};

const smallStyles = {
	width: '28px',
	height: '28px',
	borderRadius: '50%',
	marginBottom: '12px',
};

export default function Avatar({ src, small }) {
	return <img style={small ? smallStyles : avatarStyles} src={src} />;
}
