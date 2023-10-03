import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/landingPage";
import SignupForm from "./pages/SignUp/SignupForm";
// import Wardrobe from "./pages/wardrobe/Wardrobe";
import Closet from "./pages/wardrobe/Closet";
import Dashboard from "./pages/wardrobe/dashboard";

function App() {
	return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/closet" element={<Closet />}/>
      </Routes>
    </div>
  );
}

export default App;
