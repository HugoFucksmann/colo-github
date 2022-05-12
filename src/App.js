import './App.css';
import appTheme from './theme/appTheme';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import TreceProvider from './treceweb/treceContext';
import { CssBaseline } from '@mui/material';

import WordFoggy from './componets/textEffect/wordfoggy/wordFoggy';
import FullCardLanding from './layouts/fullCardLanding';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<CssBaseline />
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

const Prueba = (props) => {
	return <div>{props.children}</div>;
};

export default App;
