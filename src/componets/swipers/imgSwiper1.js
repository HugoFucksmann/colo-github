import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style1.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { makeStyles } from "@mui/styles";

export default function ImgSwiper1(props) {
  const {
    dataImg = [
      { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
      { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
      { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
      { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
    ],
    imgSize = 220,
  } = props;

  const classes = useStyles(imgSize);
  return (
    <Swiper
      {...props}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {dataImg.map(({ img }) => (
        <SwiperSlide className={classes.swiperSlide}>
          <img alt="gg" src={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const useStyles = makeStyles((theme) => ({
  swiperSlide: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: (imgSize) => imgSize,
    height: (imgSize) => imgSize,
  },
}));
