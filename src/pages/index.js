import BodyLayout from './../layouts/bodyLayout';
import FullScreen from './../layouts/fullScreen';
import LayoutWebUno from './../layouts/layoutWebUno';
import BarraEncabezado from './../componets/headers/barraEncabezado';
import DivQuienes from '../treceweb/divquienes';
import LandingTrece from './../treceweb/landing';
import HeaderTrece from './../treceweb/header';
import { useContext } from 'react';
import { TreceContext } from './../treceweb/treceContext';
import CarouselFullScreen from '../componets/carouselFullScreen';
import DivProductos from '../treceweb/divProductos';

const Home = () => {
	const { productosData } = useContext(TreceContext);
	return (
		<LayoutWebUno
			header={<HeaderTrece />}
			landing={<CarouselFullScreen />}
			footer={<></>}
		>
			<DivQuienes />
			<br />
			<br />
			<DivProductos productosData={productosData} />
		</LayoutWebUno>
	);
};

export default Home;
