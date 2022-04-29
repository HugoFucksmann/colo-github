import "./App.css";
import { appTheme } from "./theme/appTheme";
import { ThemeProvider } from "@mui/system";
import SinglePage from "./colo/singlePage";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <SinglePage />
    </ThemeProvider>
  );
}

export default App;
