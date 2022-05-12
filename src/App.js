import './App.css';
import appTheme from './theme/appTheme';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import { CssBaseline } from '@mui/material';
import AppProvider from './context/appContext';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<CssBaseline />
			<AppProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</BrowserRouter>
			</AppProvider>
		</ThemeProvider>
	);
}

export default App;
