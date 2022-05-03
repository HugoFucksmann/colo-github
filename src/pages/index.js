import BodyLayout from './../layouts/bodyLayout';
import FullScreen from './../layouts/fullScreen';
import LayoutWebUno from './../layouts/layoutWebUno';
import BarraEncabezado from './../componets/headers/barraEncabezado';
import HeaderTrece from './../treceweb/header';
import LandingTrece from './../treceweb/landing';
import CarouselFullScreen from './../componets/carouselFullScreen';

const Home = () => {
	return (
		<LayoutWebUno
			header={<HeaderTrece />}
			landing={<CarouselFullScreen />}
			body={<></>}
			footer={<></>}
		/>
	);
};

export default Home;
