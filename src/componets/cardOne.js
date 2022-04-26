import * as React from 'react';
import { styled } from '@mui/system';

const CardOne = styled('div')(({ theme }) => ({
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',
	height: '100%',
	width: '100%',
	color: 'darkslategray',
	background: theme.palette.primary.darkSoft,
	padding: 30,
	borderBottom: '1px solid #000',
	borderRadius: 15,
	filter: 'drop-shadow(5px 5px 5px #000)',
	borderBottom: `8px solid ${theme.palette.primary.darkMedium}`,
	transition: 'transform 0.3s',
	'&:hover': {
		transform: 'scale(0.9)',
	},
}));

export default React.memo((props) => {
	return <CardOne {...props}>{props.children}</CardOne>;
});
