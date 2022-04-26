import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Mousewheel, Pagination } from "swiper";

export default function CarouselFullScreen(props) {
  const { data = [{ txt: "texto 1" }, { txt: "texto 2" }] } = props;
  return (
    <div
      {...props}
      style={{ height: "88vh", marginTop: "12vh", width: "100%" }}
    >
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        //effect={"fade"}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Mousewheel, Pagination]}
        className="mySwiper"
      >
        {data.map((swipData) => (
          <SwiperSlide>{swipData.txt}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
