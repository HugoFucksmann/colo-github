import './App.css';
import { appTheme } from './theme/appTheme';
import { ThemeProvider } from '@mui/system';
import SinglePage from './colo/singlePage';
import CardImg1 from './componets/cards/cardImg1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/index';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
