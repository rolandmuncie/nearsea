import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
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
        <Route path="/" element={<div>home</div>} />
        <Route path="/create" element={<div>create</div>} />
        <Route path="/view" element={<div>view</div>} />
        <Route path="/discover" element={<div>discover</div>} />
      </Routes>
    </div>
  );
};

export default App;
