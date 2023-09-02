import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/landingPage/navbar";
import Hero from "./components/landingPage/hero";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </div>
  );
}

export default App;
