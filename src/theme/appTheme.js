import { createTheme } from '@mui/material/styles';
import museoSansRounded900 from '../fonts/MuseoSansRounded-900.otf';
import museoSansRounded300 from '../fonts/MuseoSansRounded-300.otf';
import museoSlab500i from '../fonts/Museo_Slab_500italic.otf';

//*-------- FONTS -------------------

const museoSlab = {
	'@font-face': {
		fontFamily: 'museoSlab',
		src: `url(${museoSlab500i}) format('woff')`,
	},
};

const museoRoundedBold900 = {
	'@font-face': {
		fontFamily: 'museoSansRoundedBold',
		src: `url(${museoSansRounded900}) format('woff')`,
	},
};

const museoRoundedBold300 = {
	'@font-face': {
		fontFamily: 'museoSansRounded300',
		src: `url(${museoSansRounded300}) format('woff')`,
	},
};
//*-------------------------------------------

const appTheme = createTheme({
	typography: {
		//fontFamily: ["museoSlab", "museoSansRoundedBold"].join(),
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: [
				museoSlab,
				museoRoundedBold900,
				museoRoundedBold300,
			],
		},
	},
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

//*-------- typography-------------------

appTheme.typography.h2 = {
	fontSize: '1.8rem',
	fontFamily: 'museoSansRoundedBold',
};
appTheme.typography.h4 = {
	fontSize: '1.2em',
	fontFamily: 'museoSlab',
	color: ' #5f6f81',
};
//*-------------------------------------------

export default appTheme;
