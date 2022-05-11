import './App.css';
import appTheme from './theme/appTheme';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import TreceProvider from './treceweb/treceContext';
import { CssBaseline } from '@mui/material';
import InfiniteLoopImg from './componets/infiniteLoopImg';
import ImageList1 from './componets/imageList';
import CardsDeck from './componets/sections/cardsDeck';
import AutoType from './componets/textEffect/autoType/autoType';
import WordFoggy from './componets/textEffect/wordfoggy/wordFoggy';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<CssBaseline />
			<TreceProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/prueba'
							element={
								<>
									<WordFoggy />
								</>
							}
						/>
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
