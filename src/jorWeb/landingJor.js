import React from 'react';
import { styled } from '@mui/material';
import ImgSwiper2 from './../componets/swipers/imgSwiper2';

const LandingJor = ({ data }) => {
	return (
		<CompContent>
			<CompHalf>fsaf</CompHalf>
			<CompHalf>fsf</CompHalf>
		</CompContent>
	);
};

const CompContent = styled('div')(({ theme }) => ({
	backgroundColor: 'red',
	display: 'flex',
	height: '100vh',
	width: '100%',
}));

const CompHalf = styled('div')(({ theme }) => ({
	backgroundColor: 'lightblue',
	height: '100%',
	width: '50%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}));

export default LandingJor;
