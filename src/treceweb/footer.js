import styled from '@emotion/styled';
import { Grid, TextField, Typography } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';

import InputC from './../baseComp/input';
import SocialMedia from './bodyComp/socialMedia';
import BtnRounded from '../baseComp/btnRounded';
import Title from './../baseComp/title';
import { isMobile } from './../helpers/isMobile';

const campos = [
	{ md: 6, name: 'Nombre' },
	{ md: 6, name: 'Email' },
	{ md: 12, name: 'Mensaje' },
];

const FooterTrece = () => {
	return (
		<ContentFooter>
			<Title style={{ color: '#f2f2f2' }}>Contacto</Title>
			<br />
			<GridForm container spacing={0}>
				{campos.map(({ md, name }) => (
					<Grid item xs={12} md={md} key={name}>
						<InputC label={name} />
					</Grid>
				))}
				<Grid item xs={12}>
					<br />
					<BtnRounded
						style={{
							background: 'transparent',
							float: !isMobile && 'right',
							width: 130,
							height: 34,
						}}
					>
						Enviar
					</BtnRounded>
				</Grid>
			</GridForm>
			<SocialMedia />
			<Typography variant='h6' style={{ color: '#f2f2f2' }}>
				Plasticos Gaetani
			</Typography>
			<Typography variant='h6' style={{ color: '#f2f2f2' }}>
				Cuyo 211, La Reja, Moreno, Buenos Aires
			</Typography>
		</ContentFooter>
	);
};

const ContentFooter = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',
	padding: 40,
	paddingBottom: 60,
	backgroundColor: theme.palette.primary.main,
}));

const GridForm = styled(Grid)(({ theme }) => ({
	textAlign: 'center',
	border: '2px solid #fff',
	width: !isMobile ? '50%' : '96%',
	alignSelf: 'center',
	padding: 20,
}));

export default FooterTrece;
