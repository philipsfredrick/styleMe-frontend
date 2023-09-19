import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/landingPage/navbar";
import Hero from "./components/landingPage/hero";
import SignupForm from "./pages/SignUp/SignupForm"

function App() {
  return (
    <div>
      
      <Hero />
      <Routes>
      <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
