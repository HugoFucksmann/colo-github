import { useContext } from "react";
import { TreceContext } from "./../treceweb/treceContext";

import LayoutWebUno from "./../layouts/layoutWebUno";
import DivQuienes from "../treceweb/divquienes";
import HeaderTrece from "./../treceweb/header";
import CarouselFullScreen from "../componets/carouselFullScreen";
import DivProductos from "../treceweb/divProductos";
import FooterTrece from "../treceweb/footer";
import BtnScroll from "../baseComp/btnScrollToTop";
import InstagramDiv from "./../treceweb/bodyComp/instagramEmbed";
import IgFeed from "./../treceweb/bodyComp/instagramEmbed";

const Home = () => {
  const { productosData } = useContext(TreceContext);
  return (
    <>
      <LayoutWebUno
        header={<HeaderTrece />}
        landing={<CarouselFullScreen />}
        footer={<FooterTrece />}
      >
        <DivQuienes />
        <br />
        <br />
        <DivProductos productosData={productosData} />
        <br />
        <br />
        <IgFeed />
      </LayoutWebUno>
      <BtnScroll />
    </>
  );
};

export default Home;
