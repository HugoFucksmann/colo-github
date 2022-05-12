<<<<<<< HEAD
import './App.css';
import appTheme from './theme/appTheme';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import { CssBaseline } from '@mui/material';
import AppProvider from './context/appContext';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<CssBaseline />
			<AppProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</BrowserRouter>
			</AppProvider>
		</ThemeProvider>
	);
=======
import "./App.css";
import appTheme from "./theme/appTheme";
import { ThemeProvider } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import TreceProvider from "./treceweb/treceContext";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <TreceProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </TreceProvider>
    </ThemeProvider>
  );
>>>>>>> d22789559860a842b1b4f5a77358cffc77414320
}

export default App;
