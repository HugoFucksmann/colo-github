import React from 'react';
import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectFade, Mousewheel, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

export default function CarouselFullScreen(props) {
	return (
		<div
			{...props}
			style={{
				height: '100vh',
				width: '100%',
			}}
		>
			<Swiper
				slidesPerView={1}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade, Mousewheel, Pagination]}
				className='mySwiper'
			>
				{props.landingData.map((swipData, i) => (
					<SwiperSlide key={i}>
						<>{swipData}</>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

CarouselFullScreen.propTypes = {
	landingData: PropTypes.array.isRequired,
	ComponentLand: PropTypes.node.isRequired,
};

CarouselFullScreen.defaultProps = {
	landingData: [1, 2, 3],
};
