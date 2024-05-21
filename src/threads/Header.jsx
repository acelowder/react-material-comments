import moment from 'moment';

import Username from '../components/Username';
import DateCreated from '../components/DateCreated';

const headerStyles = {
	display: 'flex',
	flexDirection: 'row',
	gap: '6px',
	alignItems: 'end',
	marginBottom: '4px',
};

export default function Header({ comment }) {
	return (
		<div style={headerStyles}>
			<Username>{comment.author}</Username>
			<DateCreated>{moment(comment.created).fromNow()}</DateCreated>
		</div>
	);
}
