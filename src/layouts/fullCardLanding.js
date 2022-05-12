import styled from '@emotion/styled';
import { Card } from '@mui/material';

import landing from '../assets/fondos/wallCity3.jpg';
import Float from '../componets/cards/float3dRoundCard/float3dRoundCard';
import VerticalLights from './../componets/backgroundAnimated/verticalLights/verticalLights';
import TvFog from './../componets/backgroundAnimated/tvfog/tvFog';

const FullCardLanding = (props) => {
	return (
		<ContentSty>
			<FullCardSty elevation={3}>
				{props.children} <TvFog />
			</FullCardSty>
			<VerticalLights />
		</ContentSty>
	);
};

const ContentSty = styled('div')(({ theme }) => ({
	width: '100%',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	background: `url(${landing}) center center`,
	zIndex: -2,
}));

const FullCardSty = styled('div')(({ theme }) => ({
	width: '70%',
	height: '70%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	borderRadius: 15,
	color: '#f2f2f2',
	backgroundColor: 'rgba(0,0,0,.4)',
	filter: 'drop-shadow(2px 2px 3px #000)',
	zIndex: 10,
	overflow: 'hidden',
}));

export default FullCardLanding;
