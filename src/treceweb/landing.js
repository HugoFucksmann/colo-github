import CarouselFullScreen from './../componets/carouselFullScreen';
import { Fade, styled, Typography } from '@mui/material';
const LandingTrece = (props) => {
	return (
		<LayoutLanding {...props}>
			<TitleTextDiv>
				<Fade in={true} timeout={700}>
					<div
						dangerouslySetInnerHTML={{
							__html: props.data.txtT.toUpperCase(),
						}}
						style={{
							fontSize: '3.4vw',
						}}
					/>
				</Fade>
				<Fade in={true} timeout={1400}>
					<Typography
						style={{
							fontSize: '1.6vw',
						}}
					>
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

export default LandingTrece;
