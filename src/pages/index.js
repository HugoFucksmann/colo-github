<<<<<<< HEAD
import BodyLayout from "./../layouts/bodyLayout";
import FullScreen from "./../layouts/fullScreen";
import LayoutWebUno from "./../layouts/layoutWebUno";
import BarraEncabezado from "./../componets/headers/barraEncabezado";
import DivQuienes from "../inwork/divquienes";

const Home = () => {
  return (
    <LayoutWebUno header={<BarraEncabezado />} footer={<></>}>
      <DivQuienes />
      <DivQuienes
        title="Productos"
        subtitle="Bolsas de reciduos y Consorcio fabricadas en polietileno de baja densidad negro reciclado, en presentacion de 10 unidades por paquete"
      />
    </LayoutWebUno>
=======
import { useContext } from "react";
import { TreceContext } from "./../treceweb/treceContext";
import LayoutWebUno from "./../layouts/layoutWebUno";
import DivQuienes from "../treceweb/divquienes";
import HeaderTrece from "./../treceweb/header";
import CarouselFullScreen from "../componets/carouselFullScreen";
import DivProductos from "../treceweb/divProductos";
import FooterTrece from "../treceweb/footer";
import BtnScroll from "../baseComp/btnScrollToTop";
import Insta from "../treceweb/bodyComp/instagramEmbed";

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
        <Insta />
        <br />
        <DivProductos productosData={productosData} />
      </LayoutWebUno>
      <BtnScroll />
    </>
>>>>>>> web-trece
  );
};

export default Home;
