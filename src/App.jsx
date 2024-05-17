import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import CommentSection from './components/CommentSection';
import './App.css';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export default function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<main className="app">
				<CommentSection />
			</main>
		</ThemeProvider>
	);
}
