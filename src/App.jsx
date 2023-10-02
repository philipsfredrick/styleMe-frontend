import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/landingPage";
import SignupForm from "./pages/SignUp/SignupForm";
import Wardrobe from "./pages/wardrobe/Wardrobe";
import Signup from "./components/signup/signup";
import OtpInput from "./pages/otpInput/otpInput";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/new-signup" element={<Signup />} />
        <Route path="/otp-input" element={<OtpInput />} />
      </Routes>
    </div>
  );
}

export default App;
