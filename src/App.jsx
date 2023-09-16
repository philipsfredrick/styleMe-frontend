import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/landingPage/navbar";
import LandingPage from "./pages/LandingPage/landingPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
