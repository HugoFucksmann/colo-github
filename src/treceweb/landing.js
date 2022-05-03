import { Fade, styled, Typography } from '@mui/material';
const LandingTrece = (props) => {
	return (
		<LayoutLanding {...props}>
			<TitleTextDiv>
				<Fade in={true} timeout={700}>
					<Typography variant='h1'>{props.data.txtTa}</Typography>
				</Fade>
				<Fade in={true} timeout={700}>
					<Typography variant='h1'>{props.data.txtTb}</Typography>
				</Fade>
				<br />
				<Fade in={true} timeout={1400}>
					<Typography variant='h4'>
						{props.data.txt1.toUpperCase()}
					</Typography>
				</Fade>
			</TitleTextDiv>
		</LayoutLanding>
	);
};

const LayoutLanding = styled('div')(({ theme, data }) => ({
	height: '100%',
	width: '100%',
	background: `url(${data.img}) no-repeat center`,
	backgroundSize: 'cover',
}));

const TitleTextDiv = styled('div')(({ theme, data }) => ({
	height: '100%',
	width: '45%',
	paddingLeft: '5%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'left',
}));

LandingTrece.defaultProps = {
	data: {
		txtTa: 'No mas derrames o bolsas rotas',
		txtTb: 'No mas derrames o bolsas rotas',
		txt1: 'eleginos y logra el mejor resultado en las tareas de todos los dias',
		img: '',
	},
};

export default LandingTrece;
