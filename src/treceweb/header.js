import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Slide } from '@mui/material';

import logo from '../assets/treceweb/Logo-Plasticos.png';
import { makeStyles } from '@mui/styles';
import styled from '@emotion/styled';
import { isMobile } from './../helpers/isMobile';

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

const HeaderTrece = (props) => {
	const [anchorElNav, setAnchorElNav] = React.useState(false);
	const [headerBack, setHeaderBack] = React.useState(false);

	React.useEffect(() => {
		let reg = window.addEventListener('scroll', handleScroll);

		// return window.removeEventListener(reg);
	}, []);

	const handleScroll = () => {
		if (window.pageYOffset > 60) {
			setHeaderBack(true);
		} else {
			setHeaderBack(false);
		}
	};

	return (
		<HideOnScroll {...props}>
			<AppBar
				elevation={!headerBack ? 0 : 3}
				style={{
					background: !headerBack ? 'transparent' : '#fff',
					paddingLeft: !isMobile && 70,
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Box
							sx={{
								flexGrow: 1,
								display: {
									xs: 'flex',
									md: 'none',
								},
							}}
						>
							<IconButton
								size='large'
								onClick={() => setAnchorElNav(true)}
								color='primary'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={anchorElNav}
								onClose={() => setAnchorElNav(false)}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{props.pages.map((page) => (
									<MenuItem key={page}>
										<Typography textAlign='center'>{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<img src={props.logo} alt='logo' width={180} />
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', md: 'none' },
							}}
						>
							{props.title}
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								justifyContent: 'right',
								marginRight: '2vw',
								display: { xs: 'none', md: 'flex' },
							}}
						>
							{props.pages.map((page) => (
								<Button
									key={page}
									sx={{
										marginLeft: 3,
									}}
								>
									<Typography variant='h5'>{page}</Typography>
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScroll>
	);
};

const AppBarCustom = styled(AppBar)(({ theme }) => ({
	backgroundColor: 'transparent',
	paddingLeft: 70,
}));

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: ({ headerBack }) =>
			headerBack ? theme.palette.primary.second : 'transparent',
		paddingLeft: 70,
	},
}));

HeaderTrece.defaultProps = {
	logo: logo,
	pages: [
		'Home',
		'Productos',
		'Quienes Somos',
		'Donde Comprar',
		'Contacto',
	],
};

export default HeaderTrece;
