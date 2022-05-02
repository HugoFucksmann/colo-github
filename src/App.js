import "./App.css";
import { appTheme } from "./theme/appTheme";
import { ThemeProvider } from "@mui/system";
import SinglePage from "./colo/singlePage";
import CardImg1 from "./componets/cards/cardImg1";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CardImg1 />
    </ThemeProvider>
  );
}

export default App;
