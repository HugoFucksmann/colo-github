import "./App.css";
import appTheme from "./theme/appTheme";
import { ThemeProvider } from "@mui/system";
<<<<<<< HEAD
import SinglePage from "./colo/singlePage";
import CardImg1 from "./componets/cards/cardImg1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/index";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import TreceProvider from "./treceweb/treceContext";
>>>>>>> web-trece
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
=======
      <TreceProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </TreceProvider>
>>>>>>> web-trece
    </ThemeProvider>
  );
}

export default App;
