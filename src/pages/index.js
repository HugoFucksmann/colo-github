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
  );
};

export default Home;
