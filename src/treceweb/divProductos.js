import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

//gradiant azul
// background: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",

const DivProductos = ({ productosData }) => {
	return (
		<ContainerDiv>
			<Title>{productosData.title}</Title>

			<Typography variant='h4'>{productosData.subtitle}</Typography>
			<Products>
				{productosData.productos.map((producto) => (
					<div>
						<img
							src={producto.img}
							alt='producto'
							style={{
								width: 200,
								borderRadius: '50%',
								filter: 'drop-shadow(3px 3px 3px #000)',
								border: '2px solid #fff',
								margin: 40,
							}}
						/>
						<Typography variant='h2'>{producto.name}</Typography>
						<Typography variant='h6'>
							{producto.descripcion}
						</Typography>
					</div>
				))}
			</Products>
			<br />
			<br />
			<Button
				size='large'
				variant='contained'
				onClick={() => productosData.func()}
				style={{
					alignSelf: 'center',
					width: 200,
					borderRadius: 25,
					background:
						'linear-gradient(to right bottom, #244c83, #6ec4b0)',
				}}
			>
				{productosData.btnText}
			</Button>
		</ContainerDiv>
	);
};

const Title = (props) => {
	return (
		<>
			<Typography {...props} variant='h2'>
				{props.children}
			</Typography>
			<div
				style={{
					borderTop: '4px solid #6ec4b0',
					width: 36,
					marginTop: -5,
					borderRadius: 15,
					alignSelf: 'center',
				}}
			/>
			<br />
		</>
	);
};

const ContainerDiv = styled('div')(({ theme }) => ({
	//height: '60vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',

	backgroundColor: '#f2f2f2',
	padding: '60px 8%',
}));

const Products = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
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
