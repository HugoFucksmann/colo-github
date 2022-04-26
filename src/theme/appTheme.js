import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
	palette: {
		primary: {
			darkStrong2: 'rgb(40, 44, 52)',
			darkStrong: 'rgb(26, 26, 51)',
			darkMedium: 'rgb(50, 49, 78)',
			darkSoft: 'rgb(138, 135, 169)',
			gradiantOne:
				'linear-gradient(to right bottom, #0100ec, #fb8364)',
			gradiantTwo:
				'linear-gradient(to right bottom, #00ffed, #9d00c6)',
			gradiantThree:
				'linear-gradient(to right bottom, #f237ef, #fc5252)',
			gradiantFour:
				'linear-gradient(to right bottom, #1eadf0, #0afb60)',
			main: '#1976d2',
			contrastText: 'white',
		},
	},
});
