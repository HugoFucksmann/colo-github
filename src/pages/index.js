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

const Home = () => {
	return (
		<LayoutWebUno
			header={<HeaderTrece />}
			landing={<CarouselFullScreen />}
			footer={<></>}
			body={<DivQuienes />}
		></LayoutWebUno>
	);
};

export default Home;
