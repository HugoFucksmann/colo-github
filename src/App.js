import logo from "./logo.svg";
import "./App.css";
import CardOne from "./componets/cardOne";
import { appTheme } from "./theme/appTheme";
import { ThemeProvider } from "@mui/system";
import BarraEncabezado from "./componets/barraEncabezado";

import CarouselFullScreen from "./componets/carouselFullScreen";
import LoginForm from "./componets/loginForm";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="singleScreenCenterCont">
        <BarraEncabezado
          title="este es el titulo"
          pages={["quienes somos", "contactenos", "cursos"]}
        />
        <LoginForm />
        <div>
          <CardOne>CardOne</CardOne>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
