import './App.css';
import appTheme from './theme/appTheme';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import { CssBaseline } from '@mui/material';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
