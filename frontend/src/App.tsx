import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ViewPage from "./pages/ViewPage";
import DiscoverPage from "./pages/DiscoverPage";
import "./App.css";

interface AppProps {
  contract: any;
  currentUser: any;
  nearConfig: any;
  wallet: any;
}

const App = ({ contract, currentUser, nearConfig, wallet }: AppProps) => {
  return (
    <div className="App">
      <NavBar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
      </Routes>
    </div>
  );
};

export default App;
