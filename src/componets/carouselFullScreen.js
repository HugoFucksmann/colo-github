import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Mousewheel, Pagination } from 'swiper';
import LandingTrece from '../treceweb/landing';
import { TreceContext } from './../treceweb/treceContext';

export default function CarouselFullScreen(props) {
	const { landingData } = useContext(TreceContext);

	return (
		<div
			{...props}
			style={{
				height: '100vh',
				width: '100%',
			}}
		>
			<Swiper
				//direction={'row'}
				slidesPerView={1}
				//spaceBetween={30}
				//effect={"fade"}
				//mousewheel={true}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade, Mousewheel, Pagination]}
				className='mySwiper'
			>
				{landingData.map((swipData) => (
					<SwiperSlide key={swipData.txtT}>
						<LandingTrece data={swipData} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
