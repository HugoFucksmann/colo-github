import logo from './logo.svg';
import './App.css';
import CardOne from './componets/cardOne';
import { appTheme } from './theme/appTheme';
import { ThemeProvider } from '@mui/system';
import BarraEncabezado from './componets/barraEncabezado';
import vqgan from './assets/vqgan.png';
import GameCard from './componets/cardMicaela';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<div className='App-header'>
				<BarraEncabezado
					title='este es el titulo'
					pages={['quienes somos', 'contactenos', 'cursos']}
				/>
				<div style={{ height: '40vh', width: '30vh' }}></div>
			</div>
		</ThemeProvider>
	);
}

export default App;
