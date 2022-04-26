import { makeStyles } from '@mui/styles';
import { Typography, styled } from '@mui/material';
import { useSpring, animated as a } from 'react-spring';

const isFirefox = typeof InstallTrigger !== 'undefined';

const GameCard = ({ cardData, i, images }) => {
	const classes = useStyles();

	return (
		<StyledCard>
			<div id='imageDiv' className={classes.imageDiv}>
				<div id='hoverTxt' className={classes.hoverTxt}>
					<Typography className={classes.title}>
						{cardData.title.toUpperCase()}
					</Typography>
				</div>
			</div>
		</StyledCard>
	);
};

const StyledCard = styled('div')({
	cursor: 'pointer',
	border: '1px solid #fff',
	width: '100%',
	height: '100%',
	margin: 'auto',

	filter: 'drop-shadow(1px 1px 3px #fff)',
	overflow: 'hidden',
	transition: 'transform 0.3s',
	borderRadius: 10,
	marginTop: 10,
	'&:hover': {
		transform: 'scale(0.94)',
		border: '3px solid #fff',
	},
	/* '@keyframes zoom': {
		from: {
			opacity: 0,
			transform: !isMobile() ? `scale(0) rotate(140deg)` : 'scale(0)',
		},
		to: {
			opacity: 1,
			transform: 'scale(1) ',
		},
	}, */
	animation: 'zoom .8s',
});

const useStyles = makeStyles((theme) => ({
	imageDiv: {
		height: '100%',
		width: '100%',
		position: 'relative',

		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		display: 'table',
		transition: '.3s',
	},
	hoverTxt: {
		height: '100%',
		display: 'flex',
		marginTop: isFirefox && '52%',
		alignItems: 'center',
		justifyContent: 'center',
		//color: colores.mainStrong,
		transition: '.3s',
	},
	title: {
		paddingLeft: '4%',
		paddingRight: '4%',
		fontFamily: 'Poppins',
		fontWeight: [800, '!important'],
		/* 	fontSize: isMobile()
			? [sizeLetter.cellBig, '!important']
			: [sizeLetter.big, '!important'], */
	},
	txt: {
		fontFamily: 'Poppins',
		/* 	fontSize: [sizeLetter.small, '!important'], */
		transform: 'translateY(2000%)',
		transition: '.2s',
		transitionDelay: '.1s',
		transitionTimingFunction: 'ease',
	},
}));

export default GameCard;
