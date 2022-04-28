import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import CardImg1 from '../cards/cardImg1';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

const CardSwiper = (props) => {
	const useSwip = useSwiper();

	const {
		cardsData = [
			{ title: 'titulo uno' },
			{ title: 'titulo dos' },
			{ title: 'titulo tres' },
			{ title: 'titulo cuatro' },
			{ title: 'titulo cinco' },
		],
		CardComp = CardImg1,
	} = props;

	function Cardd() {
		return CardComp;
	}

	return (
		<div style={{ height: '100%', width: '100%' }}>
			<div
				style={{
					//transform: 'rotate(180deg) scale(2)',
					position: 'absolute',
					top: '50%',
					left: -20,
					width: 45,
					height: 45,
					//transform: 'translateY(-50%)',
					marginTop: 0,
				}}
			>
				⮞
			</div>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				freeMode={true}
				loop
				navigation
				modules={[FreeMode, Navigation]}
			>
				{cardsData.map((data, i) => (
					<SwiperSlide key={i} style={{ background: 'transparent' }}>
						<CardComp {...data} />
					</SwiperSlide>
				))}
			</Swiper>
			{/* 	<div
				style={{
					transform: 'scale(2)',
					position: 'absolute',
					top: '48%',
					right: 0,
				}}
			>
				⮞
			</div> */}
		</div>
	);
};

CardSwiper.propTypes = {
	CardComp: PropTypes.element.isRequired,
	cardsData: PropTypes.object.isRequired,
};

export default CardSwiper;
