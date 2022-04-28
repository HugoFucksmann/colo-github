import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";

const Btns = () => {
  const classes = useStyles();
  const swiper = useSwiper();

  return (
    <div className={classes.btns}>
      <IconButton
        onClick={() => swiper.slidePrev()}
        style={{ transform: "rotate(180deg)", width: 40, height: 40 }}
      >
        ➜
      </IconButton>
      <IconButton
        onClick={() => swiper.slideNext()}
        style={{ width: 45, height: 45 }}
      >
        ➜
      </IconButton>
    </div>
  );
};

export default function ImgSwiper2(props) {
  const {
    dataImg = [
      { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
      { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
      { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
      { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
    ],
    imgSize = 300,
  } = props;
  const classes = useStyles(imgSize);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        style={{ paddingBottom: 50 }}
      >
        {dataImg.map(({ img }) => (
          <SwiperSlide
            style={{
              width: 300 / 1.3,
              margin: 0,
            }}
          >
            <div className={classes.divImg}>
              <img alt="gg" src={img} />
            </div>
          </SwiperSlide>
        ))}
        <Btns />
      </Swiper>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  swiperSlide: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 200,
    width: 100,
  },
  divImg: {
    height: (imgSize) => imgSize,
    width: (imgSize) => imgSize / 1.5,

    borderRadius: 15,
    overflow: "hidden",
  },
  eff: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  btns: {
    position: "absolute",
    bottom: 0,
    left: 10,
    marginTop: 10,
  },
}));
