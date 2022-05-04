import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ViewPage from "./pages/ViewPage";
import DiscoverPage from "./pages/DiscoverPage";

interface AppProps {
  currentUser: any;
  wallet: any;
  contract?: any;
  nearConfig?: any;
}

const App = ({ currentUser, wallet }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/create"
            element={<CreatePage currentUser={currentUser} wallet={wallet} />}
          />
          <Route
            path="/view"
            element={<ViewPage currentUser={currentUser} wallet={wallet} />}
          />
          <Route path="/discover" element={<DiscoverPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
