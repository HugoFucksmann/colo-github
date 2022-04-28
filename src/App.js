import logo from './logo.svg';
import './App.css';
import CardOne from './componets/cards/cardOne';
import { appTheme } from './theme/appTheme';
import { ThemeProvider } from '@mui/system';
import BarraEncabezado from './componets/barraEncabezado';

import CarouselFullScreen from './componets/carouselFullScreen';
import LoginForm from './componets/loginForm';
import CardImg1 from './componets/cards/cardImg1';
import LayoutWebUno from './layouts/layoutWebUno';
import BodyLayout from './layouts/bodyLayout';
import LandingOne from './componets/landings/landingOne';
import CardSwiper from './componets/swipers/cardSwiper';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<div
				style={{
					display: 'flex',
					margin: 'auto',
					width: '60%',
				}}
			>
				<CardSwiper />
			</div>
		</ThemeProvider>
	);
}

export default App;
