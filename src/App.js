import './App.css';
import { appTheme } from './theme/appTheme';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import TreceProvider from './treceweb/treceContext';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<TreceProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</BrowserRouter>
			</TreceProvider>
		</ThemeProvider>
	);
}

export default App;
