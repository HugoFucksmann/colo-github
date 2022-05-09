import styled from '@emotion/styled';
import { Button } from '@mui/material';

const BtnRounded = (props) => {
	return (
		<BtnStyle
			size='large'
			variant='contained'
			onClick={() => props.click()}
			{...props}
		>
			{props.children}
		</BtnStyle>
	);
};

const BtnStyle = styled(Button)(({ theme }) => ({
	alignSelf: 'center',
	width: 200,
	borderRadius: 25,
	background: 'linear-gradient(to right bottom, #244c83, #6ec4b0)',
	transition: 'all 0.3s',
	border: '1px solid #fff',
	'&:hover': {
		transform: 'scale(1.1)',
	},
}));

export default BtnRounded;
