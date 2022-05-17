import React from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import LandingJor from './../jorWeb/landingJor';

export default function CarouselFullScreen(props) {
	const { data } = props;
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
				loop={true}
				navigation={true}
				effect={'fade'}
				modules={[EffectFade, Autoplay]}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				className='mySwiper'
			>
				{data.map((swipData, i) => (
					<SwiperSlide key={i}>fsfsf</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

CarouselFullScreen.propTypes = {
	data: PropTypes.array.isRequired,
};

CarouselFullScreen.defaultProps = {
	data: [1, 2, 3, 4],
};
