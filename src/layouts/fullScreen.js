import { styled } from '@mui/material';

const FullScreen = (props) => {
	return (
		<FullCenterScreen {...props}>{props.children}</FullCenterScreen>
	);
};

const FullCenterScreen = styled('div')(({ theme }) => ({
	minHeight: '100vh',
	display: 'flex',
}));

export default FullScreen;
