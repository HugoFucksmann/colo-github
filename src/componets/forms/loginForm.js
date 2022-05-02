import styled from '@emotion/styled';
import { Button, TextField, Typography } from '@mui/material';

const LoginForm = () => {
	return (
		<ContainerLogin>
			<TextField
				style={{ marginBottom: 15 }}
				size='small'
				id='usuario'
				label='usuario'
				variant='outlined'
			/>
			<TextField
				style={{ marginBottom: 15 }}
				size='small'
				id='password'
				type={'password'}
				label='password'
				variant='outlined'
			/>
			<Button size='small' variant='contained'>
				Login
			</Button>
			<RegistroTxt>registrarse</RegistroTxt>
		</ContainerLogin>
	);
};

const RegistroTxt = styled('div')(({ theme }) => ({
	cursor: 'pointer',
	color: 'darkgray',
	paddingTop: 10,
	'&:hover': {
		color: 'grey',
	},
}));
const ContainerLogin = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: 30,
	textAlign: 'center',
	borderRadius: 15,
	backgroundColor: '#f2f2f2',
	border: '2px solid',
	borderColor: theme.palette.primary.main,
}));

export default LoginForm;
