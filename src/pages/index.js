import { useContext } from 'react';
import { TreceContext } from './../treceweb/treceContext';

import LayoutWebUno from './../layouts/layoutWebUno';
import DivQuienes from '../treceweb/divquienes';
import HeaderTrece from './../treceweb/header';
import CarouselFullScreen from '../componets/carouselFullScreen';
import DivProductos from '../treceweb/divProductos';
import FooterTrece from '../treceweb/footer';
import BtnScroll from '../baseComp/btnScrollToTop';
import InfiniteLoopImg from './../componets/infiniteLoopImg';
import styled from '@emotion/styled';

const Home = () => {
	const { productosData } = useContext(TreceContext);
	return (
		<>
			<LayoutWebUno
				header={<HeaderTrece />}
				//landing={<CarouselFullScreen />}
				landing={
					<LoopContent>
						<LoopC>
							<InfiniteLoopImg />
						</LoopC>
					</LoopContent>
				}
				footer={<FooterTrece />}
			>
				{/* 	<DivQuienes />
				<br />
				<br />
				<DivProductos productosData={productosData} />
				<br /> */}

				<br />
			</LayoutWebUno>
			<BtnScroll />
		</>
	);
};

const LoopContent = styled('div')(({ theme }) => ({
	width: '40vw',
	height: '80vh',
	//overflowY: 'hidden',
	background: 'transparent',
	position: 'relative',
}));

const LoopC = styled('div')(({ theme }) => ({
	height: '100%',

	'@keyframes loopInf': {
		from: {
			transform: 'translateY(-100%)',
		},

		to: {
			transform: 'translateY(200%)',
		},
	},
	//animation: 'loopInf 4s infinite linear',
}));
const LoopC2 = styled('div')(({ theme }) => ({
	height: '100%',

	'@keyframes loopInf': {
		from: {
			transform: 'translateY(100%)',
		},

		to: {
			transform: 'translateY(0%)',
		},
	},
	animation: 'loopInf 4s infinite linear',
}));

export default Home;
