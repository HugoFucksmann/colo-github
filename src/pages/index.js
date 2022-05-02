import BodyLayout from './../layouts/bodyLayout';
import FullScreen from './../layouts/fullScreen';
import LayoutWebUno from './../layouts/layoutWebUno';
import BarraEncabezado from './../componets/headers/barraEncabezado';

const Home = () => {
	return (
		<LayoutWebUno
			header={<BarraEncabezado />}
			landing={<></>}
			body={<></>}
			footer={<></>}
		/>
	);
};

export default Home;
