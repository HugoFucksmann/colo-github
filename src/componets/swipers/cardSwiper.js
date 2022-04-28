import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CardImg1 from "../cards/cardImg1";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/navigation";

import "./styleC.css";

const BtnHandler = ({ pressBtn, setPressBtn }) => {
  const swiper = useSwiper();

  switch (pressBtn) {
    case "next":
      swiper.slideNext();
      setPressBtn(null);
      break;
    case "prev":
      swiper.slidePrev();
      setPressBtn(null);
      break;
    default:
      break;
  }
  console.log(swiper);
  return <></>;
};

const CardSwiper = (props) => {
  const classes = useStyles();
  const [pressBtn, setPressBtn] = useState();

  const {
    cardsData = [{ title: "titulo uno" }, { title: "titulo dos" }],
    CardComp = CardImg1,
  } = props;

  return (
    <div {...props} className={classes.container}>
      <div className={classes.btnPrev} onClick={() => setPressBtn("prev")}>
        «
      </div>
      <Swiper
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        loop
        //navigation
        modules={[FreeMode, Navigation]}
      >
        <BtnHandler pressBtn={pressBtn} setPressBtn={setPressBtn} />
        {cardsData.map((data, i) => (
          <SwiperSlide key={i} style={{ background: "transparent" }}>
            <CardComp {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={classes.btnNext} onClick={() => setPressBtn("next")}>
        «
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  btnPrev: {
    cursor: "pointer",
    transform: "scale(2.8)",
    position: "absolute",
    top: "40%",
    left: -14,
    zIndex: 999,
    color: "grey",
  },
  btnNext: {
    cursor: "pointer",
    transform: "scale(3) rotate(180deg)",
    position: "absolute",
    top: "40%",
    right: -14,
    zIndex: 999,
    color: "grey",
  },
}));

CardSwiper.propTypes = {
  CardComp: PropTypes.element.isRequired,
  cardsData: PropTypes.object.isRequired,
};

export default CardSwiper;
