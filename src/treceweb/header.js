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
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Slide } from '@mui/material';

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
		window.addEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		if (window.pageYOffset > 120) {
			setHeaderBack(true);
		} else {
			setHeaderBack(false);
		}
	};

	return (
		<HideOnScroll {...props}>
			<AppBar
				enableColorOnDark
				elevation={!headerBack ? 0 : 3}
				style={{
					height: '9vh',
					backgroundColor: headerBack ? 'red' : 'transparent',
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
						>
							{props.title}
						</Typography>

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
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={() => setAnchorElNav(true)}
								color='inherit'
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
								justifyContent: 'center',

								display: { xs: 'none', md: 'flex' },
							}}
						>
							{props.pages.map((page) => (
								<Button
									key={page}
									sx={{
										my: 2,
										color: !headerBack ? 'black' : 'white',
										display: 'block',
										marginRight: 4,
									}}
								>
									{page}
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScroll>
	);
};

HeaderTrece.defaultProps = {
	title: 'hola',
	pages: [
		'Home',
		'Productos',
		'Quienes Somos',
		'Donde Comprar',
		'Contacto',
	],
};

export default HeaderTrece;
