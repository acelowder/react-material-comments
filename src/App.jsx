import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import CommentSection from './comment-section/CommentSection';

const appStyles = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	marginTop: '40px',
};

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export default function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<main style={appStyles}>
				<CommentSection />
			</main>
		</ThemeProvider>
	);
}
