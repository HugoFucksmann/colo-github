import * as React from 'react';
import { styled } from '@mui/system';

const CardOne = styled('div')(({ theme }) => ({
	cursor: 'pointer',
	minHeight: 240,
	textAlign: 'center',
	height: '100%',
	width: '100%',
	color: 'darkslategray',
	background: theme.palette.primary.darkSoft,
	padding: 20,
	margin: 10,
	marginLeft: -20,
	borderRadius: 15,
	filter: 'drop-shadow(1px 1px 3px #fff)',
	border: '1px solid #fff',
	fontSize: '2vw',
	transition: 'transform 0.3s',
	overflow: 'hidden',
	'&:hover': {
		transform: 'scale(0.9)',
		border: '3px solid #fff',
	},
}));

export default React.memo((props) => {
	return <CardOne {...props}>{props.children}</CardOne>;
});
