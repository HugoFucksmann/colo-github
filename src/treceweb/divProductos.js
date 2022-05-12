import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import BtnRounded from './../baseComp/btnRounded';
import CircularImg from './../baseComp/imgCircular';
import Title from './../baseComp/title';
import { Grid } from '@mui/material';
import { isMobile } from './../helpers/isMobile';

const DivProductos = ({ productosData }) => {
	return (
		<ContainerDiv>
			<Title>{productosData.title}</Title>
			<Typography variant='h4'>{productosData.subtitle}</Typography>
			<Products contained>
				{productosData.productos.map((producto) => (
					<Grid item xs={12} md={4} key={producto.name}>
						<CircularImg src={producto.img} />
						<Typography variant='h2'>{producto.name}</Typography>
						<Typography variant='h6'>
							{producto.descripcion}
						</Typography>
					</Grid>
				))}
			</Products>
			<br />
			<br />
			<BtnRounded>{productosData.btnText}</BtnRounded>
		</ContainerDiv>
	);
};

const ContainerDiv = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',

	backgroundColor: '#f2f2f2',
	padding: '60px 8%',
}));

const Products = styled(Grid)(({ theme }) => ({
	display: 'flex',
	flexDirection: isMobile ? 'column' : 'row',
	justifyContent: 'center',
}));

DivProductos.defaultProps = {
	productosData: {
		title: 'quiens somos',
		subtitle: `Somos una empresa dedicada a la confección de bolsas de polietileno
  especializada en bolsas de residuo y consorcio, tanto domiciliarias como
  patológicas, así como también en bolsas de polietileno destinadas a
  aplicaciones industriales especiales.`,
		btnText: 'Ver',
		func: () => {},
		productos: [
			{
				img: '',
				name: '',
				descripcion: '',
			},
		],
	},
};

export default DivProductos;
