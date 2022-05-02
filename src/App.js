import './App.css';
import { appTheme } from './theme/appTheme';
import { ThemeProvider } from '@mui/system';

import ImgSwiper2 from './componets/swipers/imgSwiper2';
import ImgSwiper1 from './componets/swipers/imgSwiper1';
import CardSwiper from './componets/swipers/cardSwiper';
import PersonaForm from './componets/forms/personaForm';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<div
				style={{
					margin: 'auto',
					width: '60%',
				}}
			>
				<PersonaForm />
			</div>
		</ThemeProvider>
	);
}

export default App;
