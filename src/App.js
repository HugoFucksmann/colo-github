import "./App.css";
import { appTheme } from "./theme/appTheme";
import { ThemeProvider } from "@mui/system";

import ImgSwiper2 from "./componets/swipers/imgSwiper2";
import ImgSwiper1 from "./componets/swipers/imgSwiper1";
import CardSwiper from "./componets/swipers/cardSwiper";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div
        style={{
          margin: "auto",
          width: "60%",
        }}
      >
        <CardSwiper />
      </div>
    </ThemeProvider>
  );
}

export default App;
