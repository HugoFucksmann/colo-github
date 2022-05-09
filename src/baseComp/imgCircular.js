import { styled } from '@mui/material';

const CircularImg = (props) => {
	return <StyledImg {...props} src={props.src} alt='producto' />;
};

const StyledImg = styled('img')(({ theme }) => ({
	width: 200,
	borderRadius: '50%',
	filter: 'drop-shadow(3px 3px 3px #000)',
	border: '2px solid #fff',
	margin: 40,
	marginBottom: 10,
}));

export default CircularImg;
