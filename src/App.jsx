import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/landingPage/navbar";
import Hero from "./components/landingPage/hero";
import Login from "./components/loginPage/login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={""}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
